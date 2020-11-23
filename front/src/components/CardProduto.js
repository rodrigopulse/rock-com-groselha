import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

// Styles
import { GrayColor, GraphiteColor } from '../assets/styles/CoresStyles'

// Utils
import { precoBrasil } from '../utils/dataFormat'

// Components
import Botao from './Botao'

const CardProduto = (props) => {

  return (

    <CardProdutoContainer to={`/produto/${props.produto.slug}`}>

      <ImagemDestaqueProduto src = { `${ process.env.REACT_APP_IMAGES_URL }/${props.produto.imagens[0]}` } />

      <CardProdutoConteudo>

        <CardProdutoTitulo>{ props.produto.titulo }</CardProdutoTitulo>

        <CardProdutoPreco>{ precoBrasil(props.produto.preco) }</CardProdutoPreco>

        <CardProdutoBotaoContainer>
          <Botao as="span" texto="ver produto"/>
        </CardProdutoBotaoContainer>

      </CardProdutoConteudo>

    </CardProdutoContainer>

  )

}

const CardProdutoContainer = styled(Link) `
  width: 100%;
  height: auto;
  text-decoration: none;
`
const ImagemDestaqueProduto = styled.img `
  width: 100%;
  box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.16);
  margin-bottom: 10px;
`
const CardProdutoConteudo = styled.div `
  width: 100%;
  height: auto;
`

const CardProdutoTitulo = styled.h3 `
  font-size: 18px;
  line-height: 1.5em;
  text-transform: lowercase;
  color: ${GrayColor};
`

const CardProdutoPreco = styled.span `
  font-size: 20px;
  font-weight: 700;
  display: block;
  color: ${GraphiteColor};
`

const CardProdutoBotaoContainer = styled.div `
  width: 100%;
  height: auto;
  display: block;
  padding-top: 15px;
`

export default CardProduto
