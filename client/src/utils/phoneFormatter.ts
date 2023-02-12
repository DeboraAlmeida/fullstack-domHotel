const phoneFormatter = (number: string) => {
  const regex = /(\d{2})(\d{1})(\d{4})(\d{4})/
  return number.replace(regex, '($1) $2 $3-$4')
}

export default phoneFormatter
