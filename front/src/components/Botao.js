import React from 'react'
import styled from 'styled-components'

// Styles
import { ButtonColor } from '../assets/styles/CoresStyles'

const Botao = () => {

  return (

    <BotaoContainer>

    </BotaoContainer>

  )

}

export default Botao

const BotaoContainer = styled.button `
  width: 100%;
  height: 60px;
  background: ${ButtonColor};
`
