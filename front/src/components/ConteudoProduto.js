import React from 'react'
import styled from 'styled-components'

// Styles
import { Container } from '../assets/styles/GridStyles'
import { GrayColor, PrimaryColor } from '../assets/styles/CoresStyles'

const ConteudoProduto = (props) => {

  return (

    <Container>
      <TituloProduto>{props.titulo}</TituloProduto>
      <RiscaTitulo />
    </Container>

  )

}

const TituloProduto = styled.h1 `
  width: 100%;
  display: block;
  font-size: 18px;
  font-weight: 700;
  color: ${GrayColor};
  text-align: center;
  padding-top: 30px;
  @media (min-width: 768px) {
    font-size: 22px;
    text-align: left;
    padding-top: 0;
  }
`

const RiscaTitulo = styled.div `
  width: 132px;
  height: 2px;
  background: ${PrimaryColor};
  margin: 5px auto 15px auto;
  @media (min-width: 768px) {
    margin: 5px 0 15px 0;
  }
`

export default ConteudoProduto
