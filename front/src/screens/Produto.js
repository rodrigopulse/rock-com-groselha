import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { useLocation } from 'react-router-dom'

// Styled
import { ContainerPaginas, ContainerContent } from '../assets/styles/GridStyles'

// API
import { getProdutoSlug } from '../api/produtos'

// Components
import GaleriaProduto from '../components/GaleriaProduto'

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

            <ConteudoProduto>

              <GaleriaProduto imagens={produtoState.imagens} />

            </ConteudoProduto>

            <ConteudoProduto>

              <h1>{produtoState.titulo}</h1>

            </ConteudoProduto>

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

const ConteudoProduto = styled.div `
  width: 50%;
  height: auto;
  position: relative;
`

export default Produto
