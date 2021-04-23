import axios from 'axios'
const baseUrl = 'http://localhost:3001/api/services'

const getAll = () => {
  const request = axios.get(baseUrl)
  request.then(response => response.data)
}

export default getAll