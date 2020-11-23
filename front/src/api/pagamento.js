import axios from 'axios'

export const getParcelas = async (valor) => {
  try {
    const parcelas = axios({
      url: `${process.env.REACT_APP_API_URL}/parcelas/${valor}`,
      method: 'GET'
    })
    return parcelas
  } catch(err) {
    return err
  }
}
