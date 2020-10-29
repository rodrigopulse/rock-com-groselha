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
    try {
      const banners = await getBanner()
      setBannerState(banners.data)
      return banners
    } catch {
      return false
    }
  }

  const getProdutosHome = async () => {
    try {
      const produtos = await getProdutos(50, 1)
      setProdutoState(produtos.data.produto)
      return produtos
    } catch {
      return false
    }
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
