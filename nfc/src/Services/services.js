import axios from 'axios'
const baseUrl = `${process.env.REACT_APP_URL}/api/services`

const getAll = () => {
  const request = axios.get(baseUrl)
  request.then(response => response.data)
}

export default getAll