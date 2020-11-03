import React, {useEffect} from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
// Styles
import { GrayColor, GraphiteColor } from '../assets/styles/ColorStyles'

// Utils
import { precoBrasil } from '../utils/dataFormat'

const CardProduto = (props) => {

  useEffect( () => {
    console.log(props)
  }, [props])

  return (

    <CardProdutoContainer to="#">

      <ImagemDestaqueProduto src = { `${ process.env.REACT_APP_IMAGES_URL }/${props.produto.imagens[0].filename}` } />

      <CardProdutoContent>

        <CardProdutoTitulo>{ props.produto.titulo }</CardProdutoTitulo>

        <CardProdutoPreco>{ precoBrasil(props.produto.preco) }</CardProdutoPreco>

      </CardProdutoContent>

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
const CardProdutoContent = styled.div `
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

export default CardProduto
