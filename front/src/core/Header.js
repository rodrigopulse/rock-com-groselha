import React from 'react'
import styled from 'styled-components'

// Styles
import { MaxWidth } from '../assets/styles/VariablesStyles'

// Core
import Menu from './Menu'
import Logo from './Logo'

const Header = () => {

  return (

    <HeaderWrapper>

      <HeaderContent>

        <Logo />

        <Menu />

      </HeaderContent>

    </HeaderWrapper>

  )

}

// Styles
const HeaderWrapper = styled.header `
  width: 100%;
  height: auto;
  position: relative;
  background: #000;
  display: flex;
  align-items: center;
  justify-content: center;
`
const HeaderContent = styled.div `
  width: 100%;
  max-width: ${ MaxWidth };
  height: 100px;
  position: relative;
  padding: 0 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media screen and (max-width: 767px) {
    height: 60px;
    justify-content: center;
  }
`

export default Header
