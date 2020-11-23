import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { useLocation } from 'react-router-dom'

// Styled
import { ContainerPaginas, ContainerContent } from '../assets/styles/GridStyles'

// API
import { getProdutoSlug } from '../api/produtos'

// Components
import GaleriaProduto from '../components/GaleriaProduto'
import ConteudoProduto from '../components/ConteudoProduto'

const Produto = () => {

  const location = useLocation()
  const [produtoState, setProdutoState] = useState(null)

  useEffect( () => {
    let slug = location.pathname.split('/')
    slug = slug[2]
    getProdutoSlug(slug)
      .then( res => {
        setProdutoState(res.data)
      }).catch( err => { console.log('ERRO: ', err)})
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (

    <ContainerPaginas>

      <ContainerContent>

        {produtoState != null &&
          <ContainerProduto>

            <ItemProduto>

              <GaleriaProduto imagens={produtoState.imagens} />

            </ItemProduto>

            <ItemProduto>

              <ConteudoProduto produto={produtoState} />

            </ItemProduto>

          </ContainerProduto>
        }

      </ContainerContent>

    </ContainerPaginas>

  )

}
const ContainerProduto = styled.div `
  width: 100%;
  display: flex;
  flex-wrap: wrap;
`

const ItemProduto = styled.div `
  width: 100%;
  height: auto;
  position: relative;
  @media (min-width: 768px) {
    width: 50%;
    padding-left: 20px;
    &:first-child {
      padding-left: 0;
    }
  }
`

export default Produto
