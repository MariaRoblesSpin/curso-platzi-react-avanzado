import { useEffect, useState, useRef } from 'react'
export function useNearScreen () {
  const element = useRef(null)
  const [show, setShow] = useState(false)
  useEffect(function () {
    // Import dinámico, devuelve una promesa. El polyfill de intersection observer parchea el objeto window.
    // Con la promesa el polyfill se carga sólo cuando es necesario y el navegador no soporta Intersection observer
    Promise.resolve(
      typeof window.IntersectionObserver !== 'undefined'
        ? window.IntersectionObserver
        : import('intersection-observer')
    ).then(() => {
      const observer = new window.IntersectionObserver(function (entries) {
        const { isIntersecting } = entries[0]
        if (isIntersecting) {
          setShow(true)
          // desconectamos el observer para que deje de funcionar
          observer.disconnect()
        }
      })
      observer.observe(element.current)
    })
  }, [element])
  return [show, element]
}
