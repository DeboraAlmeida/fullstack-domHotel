
import encrypt from "./encrypt"
import getIdToken from "./getIdToken"

const backEnd = async (route: string, method: 'GET' | 'POST' | 'PUT' | 'DELETE', needAuthentication: boolean, bodyInfo?: any): Promise<any> => {
  const url = process.env.NODE_ENV === 'development'
    ? 'http://localhost:3002'
    : 'http://localhost:3002'


  const token = needAuthentication ? getIdToken() : null

  const body = await bodyInfo ? encrypt(bodyInfo) : {}

  return await fetch(`${url}${route}`, {
    method,
    body: JSON.stringify({ body }),
    headers: {
      'Content-Type': 'application/json',
      ...token ? { 'Authorization': `Bearer ${token}` } : {}
    }
  }).then(async r => await r.json())
    .then(res => {
      return res
    })
    .catch(error => {
      return error
    })

  return null
}

export default backEnd
