import React, { Fragment, useState, useEffect } from 'react'
import { Category } from '../Category'
import { List, Item } from './styles'

function useCategoriesData () {
  const [categories, setCategories] = useState([])
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    async function fetchData () {
      setLoading(true)
      const data = await window.fetch('https://petgram-server-maria-robles.mariarobles.now.sh/categories')
      const results = await data.json()
      setCategories(results)
      setLoading(false)
    }
    fetchData()
  }, [])
  return { categories, loading }
  // código con promises encadenadas
  // useEffect(function () {
  //   window.fetch('https://petgram-server-maria-robles.mariarobles.now.sh/categories')
  //     .then(res => res.json())
  //     .then(response => {
  //       setCategories(response)
  //     })
  // }, [])
}
export const ListOfCategories = () => {
  const { categories, loading } = useCategoriesData()
  const [showFixed, setShowFixed] = useState(false)
  // useEffect funciona como el componentDidMount

  useEffect(function () {
    const onScroll = event => {
      const newShowFixed = window.scrollY > 200
      showFixed !== newShowFixed && setShowFixed(newShowFixed)
    }

    document.addEventListener('scroll', onScroll)

    return () => document.removeEventListener('scroll', onScroll)
  }, [showFixed])

  const renderList = (fixed) => (
    <List fixed={fixed}>
      {
        loading
          ? <Item key='loading'> Cargando...</Item>
          : categories.map(category => <Item key={category}><Category {...category} path={`/pet/${category.id}`} /></Item>)
      }
    </List>
  )
  return (
    <Fragment>
      {renderList()}
      {showFixed && renderList(true)}
    </Fragment>
  )
}
