// Arquivo criado: 07/03/2023 às 11:12

const getIfAlreadyLogged = (field: 'name' | 'email'): string => {
  const user = sessionStorage.getItem('isLogged')

  if (user) {
    const userLogged = JSON.parse(user)

    switch (field) {
      case 'name':
        return userLogged.name
      case 'email':
        return userLogged.email
      default:
        return ''
    }
  }
  return ''
}

export default getIfAlreadyLogged
