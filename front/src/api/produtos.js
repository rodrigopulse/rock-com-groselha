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
