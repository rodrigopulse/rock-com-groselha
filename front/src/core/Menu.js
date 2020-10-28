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
        <ReactSVG src={ HomeIcon } />
        <span>Home</span>
      </MenuButton>

      <MenuButton to="/login" exact={ true }>
        <ReactSVG src={ LoginIcon } />
        <span>Entrar</span>
      </MenuButton>

      <MenuButton to="/minhas-compras" exact={ true }>
        <ReactSVG src={ CartIcon } />
        <span>Minhas Compras</span>
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
  @media screen and (max-width: 767px) {
    width: 100%;
    height: 60px;
    justify-content: space-between;
    align-items: center;
    position: fixed;
    bottom: 0;
    left: 0;
    padding: 0 20px;
    background: #000;
  }
`
const MenuButton = styled(NavLink) `
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
  span {
    color: #fff;
    transition: all ease-in-out .5s;
  }
  &:visited, &:active, &:focus {
    span {
      color: #fff;
      text-decoration: none;
    }
  }
  &:hover {
    span {
      color: ${PrimaryColor};
      text-decoration: none;
    }
    svg {
      fill: ${PrimaryColor};
    }
  }
  &:last-child {
    margin-right: 0;
  }
  &.active {
    span {
      color: ${PrimaryColor};
    }
    svg {
      fill: ${PrimaryColor};
    }
  }
  @media screen and (max-width: 767px) {
    span {
      display: none;
    }
  }
`

export default Menu
