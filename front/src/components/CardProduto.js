import React, {useEffect} from 'react'
import styled from 'styled-components'

const CardProduto = (props) => {

  useEffect( () => {
    console.log(props)
  }, [props])

  return (

    <CardProdutoContainer>
      <ImagemDestaqueProduto src = { `${ process.env.REACT_APP_IMAGES_URL }/${props.produto.imagens[0].filename}` } />
      <CardProdutoContent></CardProdutoContent>
    </CardProdutoContainer>

  )

}

const CardProdutoContainer = styled.div `
  width: 100%;
  height: auto;
`
const ImagemDestaqueProduto = styled.img `
  width: 100%;
`
const CardProdutoContent = styled.div ``

export default CardProduto
