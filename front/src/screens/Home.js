import React, { useState, useEffect } from 'react'

// Components
import Hero from '../components/Hero'

// Styles
import { Container } from '../assets/styles/GridStyles'

// API
import { getBanner } from '../api/banners'

const Home = () => {

  const [bannerState, setBannerState] = useState([])

  const getBanners = async () => {
    try {
      const banners = await getBanner()
      setBannerState(banners.data)
      return banners
    } catch {
      return false
    }
  }

  useEffect( () => {
    getBanners()
  }, [])

  return (

    <Container>

      <Hero banners = { bannerState } />

    </Container>

  )
}

export default Home
