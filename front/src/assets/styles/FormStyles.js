import styled from 'styled-components'

export const ContainerForm = styled.div `
  width: 100%;
  max-width: 600px;
  margin: 0 auto;
  position: relative;
  display: block;
`
export const Label = styled.label `
  width: 100%;
  font-size: 14px;
  color: #222222;
  margin-bottom: 5px;
  display: block;
`
export const Input = styled.input `
  width: 100%;
  height: auto;
  display: block;
  padding: 10px;
  margin-bottom: 20px;
  border-radius: 5px;
  border: 1px solid #000;
  &:focus {
    outline: 0;
    box-shadow: 1px 1px 4px rgba(0, 0, 0, .4);
  }
`
export const ErrorForm = styled.span `
  width: 100%;
  display: block;
  position: relative;
  top: -8px;
  margin-bottom: 10px;
  font-size: 12px;
  color: #ED2121;
`
