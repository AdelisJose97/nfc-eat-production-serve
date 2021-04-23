import axios from 'axios'
const baseUrl = 'http://localhost:3001/api/restaurants'

const getAll = () => {
  const request = axios.get(baseUrl)
  return request.then(response => response.data)
}

const getOne = (city, id) => {
  const request = axios.get(`${baseUrl}/${city}/${id}`)
  return request.then(response => response.data)
}

export { getAll, getOne }