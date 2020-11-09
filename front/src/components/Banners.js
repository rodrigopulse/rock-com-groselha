import React from 'react'
import styled from 'styled-components'

const viewWidth = window.innerWidth

const Banners = (props) => {

  return (

    <HeroContainer>

      { props.banners.map( (res, index) => (
        <img
          key = { index }
          src = { `${ process.env.REACT_APP_IMAGES_URL }/${ viewWidth <= 768 ? res.imagemMobile : res.imagemDesktop }` }
          alt = { res.titulo }
        />
      ) ) }

    </HeroContainer>

  )

}

const HeroContainer = styled.div `
  width: 100%;
  height: auto;
  display: block;
  position: relative;
  background: #ccc;
  margin: 0;
  img {
    width: 100%;
  }
`

export default Banners
