import axios from 'axios'

export const getProdutos = (limite, pagina) => {
  return new Promise( (resolve, reject) => {
    axios({
      url: `${process.env.REACT_APP_API_URL}/produto?limite=${limite}&pagina=${pagina}`,
      method: "GET"
    })
    .then( res => resolve(res) )
    .catch( err => reject(err) );
  })
}
