import HttpRequest from './axios'

const baseUrl =
  process.env.NODE_ENV === 'production'
    ? 'https://abeille.top/api'
    : 'http://localhost:8760'

export const axios = new HttpRequest(baseUrl)
