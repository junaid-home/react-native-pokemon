import apisauce from 'apisauce'
import env from '../config/env'

const client = apisauce.create({
  baseURL: env.apiURL,
  maxBodyLength: Infinity,
  maxContentLength: Infinity,
})

const get = client.get
const post = client.post

export default { get, post }
