import React from 'react'
import styled from 'styled-components'

// Styles
import { PrimaryColor, PrimaryColorHover } from '../assets/styles/CoresStyles'

const Botao = (props) => {

  return (
    <BotaoContainer as={props.as}>
      {props.texto}
    </BotaoContainer>

  )

}

export default Botao

const BotaoContainer = styled.button `
  width: 100%;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${PrimaryColor};
  border: 0;
  font-size: 22px;
  font-weight: 700;
  color: #fff;
  transition: all ease-in-out .5s;
  &:hover {
    background: ${PrimaryColorHover};
  }
`
