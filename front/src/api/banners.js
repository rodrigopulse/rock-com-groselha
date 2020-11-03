import axios from 'axios'

export const getBanner = async () => {
  try {
    const banner = axios({
      url: `${process.env.REACT_APP_API_URL}/banner`,
      method: "GET"
    })
    return banner
  }
  catch( err ) {
    return err
  }
}
