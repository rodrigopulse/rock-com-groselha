import React, { useEffect, useState } from 'react'
import styled from 'styled-components'

// Utils
import { precoBrasil } from '../utils/dataFormat'

// API
import { getParcelas } from '../api/pagamento'

// Styles
import { Container } from '../assets/styles/GridStyles'
import { GrayColor, PrimaryColor, GraphiteColor } from '../assets/styles/CoresStyles'
import Botao from '../components/Botao'

const ConteudoProduto = (props) => {

  const [parcelas, setParcelas] = useState('')

  useEffect( () => {
    getParcelas(10)
      .then( res => {
          console.log(res.data.parcelas.installments[12])
          setParcelas(res.data.parcelas.installments[12])
      }).catch( err => {
        console.log('Erro: ', err)
      })
  }, [])

  return (

    <Container>

      <ContainerInfos>

        <TituloProduto>{props.produto.titulo}</TituloProduto>
        <RiscaTitulo />
        <PrecoProduto>{precoBrasil(props.produto.preco)}</PrecoProduto>
        {parcelas !== '' && <PrecoParcelado>em 12x de {precoBrasil(parcelas.installment_amount)}</PrecoParcelado> }
        <ContainerBotao>
          <Botao as="button" texto="comprar" />
        </ContainerBotao>

      </ContainerInfos>

    </Container>

  )

}

const ContainerInfos = styled.div `
  width: 100%;
  height: auto;
  max-width: 328px;
`

const ContainerBotao = styled.div `
  width: 100%;
  height: auto;
  display: block;
  position: relative;
  margin: 20px 0;
`

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

const PrecoProduto = styled.span `
  font-size: 28px;
  color: ${GraphiteColor};
  font-weight: 700;
  display: block;
  position: relative;
  @media (min-width: 768px) {
    margin-top: 35px;
  }
`

const PrecoParcelado = styled.span `
  font-size: 16px;
  color: ${GrayColor};
  font-weight: 700;
  margin-top: 5px;
`

export default ConteudoProduto
