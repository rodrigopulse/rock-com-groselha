import React, { useState, useEffect } from 'react'
import styled from 'styled-components'

const GaleriaProduto = (props) => {

  const [imagemDestaque, setImagemDestaque] = useState('')
  const [indexDestaque, setIndexDestaque] = useState(0)

  useEffect( () => {
    setImagemDestaque(props.imagens[0].filename)
    console.log('imagens: ', props.imagens)
  }, [props.imagens])

  const trocaImagem = (index) => {
    setImagemDestaque(props.imagens[index].filename)
    setIndexDestaque(index)
  }

  return (

    <ContainerGaleria>

      <DestaqueGaleria src={ `${ process.env.REACT_APP_IMAGES_URL }/${imagemDestaque}`} alt="Imagem de Destaque" />

      <ThumbsGaleria>

        {props.imagens.map( (res, index) => (

          <ThumbBotao onClick={ () => { trocaImagem(index) } } key={index}>

            {index !== indexDestaque && <OverlayImagem />}

            <ThumbImagem src={`${ process.env.REACT_APP_IMAGES_URL }/${res.filename}`} alt="Thumb Produto" />

          </ThumbBotao>

        ))}

      </ThumbsGaleria>

    </ContainerGaleria>

  )

}

const ContainerGaleria = styled.div `
  width: 100%;
  height: auto;
  display: block;
  position: relative;
`

const DestaqueGaleria = styled.img `
  width: 100%;
  height: auto;
  position: relative;
  display: block;
`

const ThumbsGaleria = styled.div `
  width: 100%;
  height: auto;
  display: flex;
  justify-content: flex-start;
  margin-top: 10px;
`

const OverlayImagem = styled.div `
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1;
`

const ThumbBotao = styled.button `
  width: calc(20% - 10px);
  height: auto;
  display: block;
  border: 0;
  margin-right: 10px;
  position: relative;
  &:last-child {
    margin-right: 0;
  }
`

const ThumbImagem = styled.img `
  width: 100%;
  height: auto;
`

export default GaleriaProduto
