const validatePassword = password => {

  /**
   * senha deve ter no mínimo 6 caracteres
   * senha deve ter no mínimo 1 número
   * senha deve ter no mínimo 1 caractere especial
   */

  const passwordRegex = /^(?=.*[0-9])(?=.*[!@#$%^&*()_+])[a-zA-Z0-9!@#$%^&*()_+]{6,}$/
  return passwordRegex.test(password)
}

export default validatePassword
