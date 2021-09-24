import axios from 'axios'

export const request = axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    key: 'AIzaSyDgnMWYZAv4QV7HpDQtyP__dqiaIAxFj7o',
  },
})