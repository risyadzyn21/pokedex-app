import axios from 'axios'
// const BASE_URL = 'https://pokeapi.co/api/v2/pokemon?offset=0&limit=100'
const api = axios.create({ baseURL: 'https://pokeapi.co/api/v2' });
export default api

// const API = axios.create({
//   baseURL: BASE_URL
// });

// export default API

// export function pokeDB(page) {

//   return axios({
//     method: 'GET',
//     url: `https://pokeapi.co/api/v2/pokemon?offset=0&limit=100`
//   })
// }