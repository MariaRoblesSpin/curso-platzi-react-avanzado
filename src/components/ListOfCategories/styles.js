import styled, { css } from 'styled-components'
import { fadeIn } from '../../styles/animation'

export const List = styled.ul`
  display:flex;
  overflow: scroll;
  width: 100%;
  ${props => props.fixed && css`
    ${fadeIn({ time: '0.5s' })}
    background: white;
    border-radius: 60px;
    box-shadow: 0 0 20px rgba(0, 0, 0 , 0.3);
    left: 0;
    right: 0;
    margin: 0 auto;
    padding: 5px 20px;
    transform: scale(.5);
    z-index: 1;
    position: fixed;
    max-width: 400px;
    top: -20px;
  `}
`

export const Item = styled.li`
  padding: 0 8px;
`
