const validateEmail = (value: string) => {
  // eslint-disable-next-line no-useless-escape
  if ((/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(value))) {
    return false
  }
  return true
}

const validateName = (value: string) => {
  // eslint-disable-next-line no-useless-escape
  if (/^[ a-zA-ZàèìòùÀÈÌÒÙáéíóúýÁÉÍÓÚÝâêîôûÂÊÎÔÛãñõÃÑÕäëïöüÿÄËÏÖÜŸçÇßØøÅåÆæœ'`'\-]+$/.test(value)) {
    return false
  }
  return true
}

const formatTelephone = (value: string) => {
  const result = value.replace('(', '').replace(')', '')
  return result
}


const validateNumber = (value: string) => {
  const result = formatTelephone(value)
  if (/^\d+$/.test(result.trim())) {
    return false
  }
  return true
}

const validatePassword = (password: string) => {

  /**
   * senha deve ter no mínimo 6 caracteres
   * senha deve ter no mínimo 1 número
   * senha deve ter no mínimo 1 caractere especial
   */

  const passwordRegex = /^(?=.*[0-9])(?=.*[!@#$%^&*()_+.{}])[a-zA-Z0-9!@#$%^&*()_+.{}]{6,}$/
  return passwordRegex.test(password)
}

export default validatePassword



export { validateEmail, validateName, validateNumber, validatePassword }

