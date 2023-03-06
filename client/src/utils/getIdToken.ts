const getIdToken = (type: 'admin' | 'user'): string | null => {

  const key = type === 'user' ? 'isLogged' : 'isLoggedAdmin'

  const user = sessionStorage.getItem(key)

  if (user) {
    return JSON.parse(user).token
  }

  return null
}

export default getIdToken
