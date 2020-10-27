import axios from 'axios'

export const getBanner = () => {
  return new Promise( (resolve, reject) => {
    axios({
      url: `${process.env.REACT_APP_API_URL}/banner`,
      method: "GET"
    })
    .then( res => resolve(res) )
    .catch( err => reject(err) );
  })
}
