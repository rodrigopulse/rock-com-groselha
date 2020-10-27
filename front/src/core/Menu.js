import React from 'react'
import { NavLink } from 'react-router-dom'
import { ReactSVG } from 'react-svg'

// Styles
import styled from 'styled-components'
import { PrimaryColor } from '../assets/styles/ColorStyles'

// Icons
import HomeIcon from '../assets/images/icons/home.svg'
import LoginIcon from '../assets/images/icons/login.svg'
import CartIcon from '../assets/images/icons/cart.svg'

const Menu = () => {

  return (

    <MenuWrapper>

      <MenuButton to="/" exact={ true }>
        <ReactSVG src={ HomeIcon } /> Home
      </MenuButton>

      <MenuButton to="/login" exact={ true }>
        <ReactSVG src={ LoginIcon } /> Entrar
      </MenuButton>

      <MenuButton to="/minhas-compras" exact={ true }>
        <ReactSVG src={ CartIcon } /> Minhas Compras
      </MenuButton>

    </MenuWrapper>

  )

}

// Styles
const MenuWrapper = styled.nav `
  width: auto;
  height: auto;
  position: relative;
  margin: 0;
  display: flex;
  justify-content: flex-start;
`
const MenuButton = styled(NavLink) `
  color: #fff;
  text-decoration: none;
  text-transform: lowercase;
  margin-right: 25px;
  transition: all ease-in-out .5s;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 0;
  margin-right: 80px;
  svg {
    transition: all ease-in-out .5s;
    margin-right: 10px;
    fill: #fff;
  }
  &:visited, &:active {
    color: #fff;
    text-decoration: none;
  }
  &:hover {
    color: ${PrimaryColor};
    svg {
      fill: ${PrimaryColor};
    }
  }
  &:last-child {
    margin-right: 0;
  }
  &.active {
    color: ${PrimaryColor};
    svg {
      fill: ${PrimaryColor};
    }
  }
`

export default Menu
