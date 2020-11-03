import styled from 'styled-components'

// Styles
import { MaxWidth } from './VariaveisStyles'

export const Container = styled.div `
  width: 100%;
  height: auto;
  display: block;
  position: relative;
  padding: 0;
  margin: 0;
`
export const ContainerContent = styled.div `
  width: 100%;
  max-width: ${MaxWidth};
  height: auto;
  position: relative;
  margin: 0 auto;
  padding: 0 10px;
  display: flex;
  flex-direction: ${props => props.direction};
  justify-content: ${props => props.justify};
  align-items: ${props => props.align};
  flex-wrap: wrap;
  z-index: 1;
`
