// Arquivo criado: 25/02/2023 às 17:58

const dataFormatter = (dataISO: Date) => {

  const data = new Date(dataISO)
  const dia = data.getDate().toString().padStart(2, '0')
  const mes = (data.getMonth() + 1).toString().padStart(2, '0')
  const ano = data.getFullYear().toString()

  return `${dia}/${mes}/${ano}`
}

export default dataFormatter
