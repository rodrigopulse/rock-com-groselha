import axios from 'axios'

export const getProdutos = async (limite, pagina) => {
  try {
    const produtos = axios({
      url: `${process.env.REACT_APP_API_URL}/produto?limite=${limite}&pagina=${pagina}`,
      method: "GET"
    })
    return produtos
  }
  catch(err) {
    return err
  }
}

export const getProdutoSlug = async (slug) => {
  try {
    const produtos = axios({
      url: `${process.env.REACT_APP_API_URL}/produtoslug/${slug}`,
      method: "GET"
    })
    return produtos
  }
  catch(err) {
    return err
  }
}
