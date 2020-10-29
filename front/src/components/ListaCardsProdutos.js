import React from 'react'
import styled from 'styled-components'

// Components
import CardProduto from './CardProduto'

// Styles
import { ContainerContent } from '../assets/styles/GridStyles'

const ListaCardProdutos = (props) => {

  return (

    <ContainerContent direction="row" justify="flex-start" align="flex-start">

      { props.produtos.length > 0 && props.produtos.map( (res, index) => (

        <CardProdutosItem key={index}>

          <CardProduto produto={res} />

        </CardProdutosItem>

      ) ) }

    </ContainerContent>

  )

}

const CardProdutosItem = styled.div `
  width: 100%;
  height: auto;
  display: block;
  flex: none;
  padding: 10px;
  @media screen and (min-width: 768px) {
    width: 33.33%;
  }
`

export default ListaCardProdutos
