// Arquivo criado: 07/03/2023 às 11:46

import backEnd from "utils/backEnd"

const getThisMonthContacts = async () => {

  return await backEnd('/contato', 'GET', 'admin').then((response) => {
    if (response.status === 200) {
      return response.data
    }

    return false
  }).catch(() => {
    return false

  })

}

export default getThisMonthContacts
