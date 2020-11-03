import React, { useState, useEffect } from 'react'

// Components
import Banners from '../components/Banners'
import ListaCardsProdutos from '../components/ListaCardsProdutos'

// Styles
import { Container } from '../assets/styles/GridStyles'

// API
import { getBanner } from '../api/banners'
import { getProdutos } from '../api/produtos'

const Home = () => {

  const [bannerState, setBannerState] = useState([])
  const [produtosState, setProdutoState] = useState([])

  const getBanners = async () => {
    getBanner()
      .then( res => {
        setBannerState(res.data)
      })
      .catch( err => { console.log('ERRO: ', err.response )})
  }

  const getProdutosHome = async () => {
    getProdutos(50, 1)
      .then( res => {
        setProdutoState(res.data.produto)
      })
      .catch( err => { console.log('ERRO: ', err.response )})
  }

  useEffect( () => {
    getBanners()
    getProdutosHome()
  }, [])

  return (

    <Container>

      <Banners banners = { bannerState } />

      <ListaCardsProdutos produtos = { produtosState } />

    </Container>

  )
}

export default Home
