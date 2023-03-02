const getIdToken = (): string | null => {
  const user = sessionStorage.getItem('isLogged')

  if (user) {
    return JSON.parse(user).token
  }

  return null
}

export default getIdToken
