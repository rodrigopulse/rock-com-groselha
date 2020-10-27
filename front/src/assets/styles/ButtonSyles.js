import styled from 'styled-components'
import { PrimaryColor, PrimaryColorHover } from './ColorStyles'

export const Button = styled.button `
  border: 0;
  padding: 10px 30px;
  background: ${ PrimaryColor };
  color: #000;
  text-transform: uppercase;
  font-weight: 700;
  border-radius: 5px;
  transition: all ease-in-out .5s;
  &:focus, &:active {
    outline: 0
  }
  &:hover {
    background: ${ PrimaryColorHover };
  }
`
