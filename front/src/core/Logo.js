import React from 'react'
import styled from 'styled-components'
import { ReactSVG } from 'react-svg'
import LogoSVG from '../assets/images/logo.svg'

const Logo = () => {

  return (

    <LogoWrapper>
      <ReactSVG src={ LogoSVG } />
    </LogoWrapper>

  )

}

const LogoWrapper = styled.div `
  width: auto;
  height: auto;
  @media screen and (max-width: 767px) {
    svg {
      width: 79px;
      height: auto;
    }
  }
`
export default Logo
