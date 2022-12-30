const validateEmail = (value) => {
  // eslint-disable-next-line no-useless-escape
  if ((/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(value))) {
    return false
  }
  return true
}

const validateName = (value) => {
  // eslint-disable-next-line no-useless-escape
  if (/^[ a-zA-ZàèìòùÀÈÌÒÙáéíóúýÁÉÍÓÚÝâêîôûÂÊÎÔÛãñõÃÑÕäëïöüÿÄËÏÖÜŸçÇßØøÅåÆæœ'`'\-]+$/.test(value)) {
    return false
  }
  return true
}

export { validateEmail, validateName }

