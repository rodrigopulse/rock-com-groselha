import React from 'react'
import styled from 'styled-components'

const Titulo = (props) => {

  return <TituloTexto>{props.texto}</TituloTexto>

}

const TituloTexto = styled.h1 `
  font-size: 22px;
  font-weight: 700;
  margin: 20px auto;
  text-align: center;
`

export default Titulo
