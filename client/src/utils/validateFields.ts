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


export { validateEmail, validateName, validateNumber }

