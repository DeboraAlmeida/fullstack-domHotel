import getIdToken from "utils/getIdToken";

const getMonthReserves = async () => {

  const getFullDate = (type: 'first' | 'last') => {
    const date = new Date();

    const data = type === 'first'
      ? new Date(date.getFullYear(), date.getMonth(), 1)
      : new Date(date.getFullYear(), date.getMonth() + 1, 0)


    return data.toLocaleDateString().split('/').reverse().join('-')
  }

  try {
    const response = await fetch(`http://localhost:3002/reservas-pela-data/${getFullDate('first')}/${getFullDate('last')}`, {
      method: 'GET', headers: {
        'X-Powered-By': 'Express',
        'Content-Type': 'application/json',
        'Connection': 'keep-alive',
        'Keep-Alive': 'timeout=5',
        'Authorization': `Bearer ${getIdToken('admin')}`
      }
    })
    const result = await response.json()
    return result.data.length
  } catch (error) {
    return
  }
}

export default getMonthReserves