// Arquivo criado: 05/03/2023 às 15:31

const validateIsAdminLogged = () => {
  const session = sessionStorage.getItem('isLoggedAdmin')
  if (session === undefined || session === null) {
    window.location.reload()
  }
}

export default validateIsAdminLogged
