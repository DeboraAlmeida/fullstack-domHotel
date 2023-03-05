const getMonthReserves = async () => {
  const date = new Date();
  const lastDay = new Date(date.getFullYear(), date.getMonth() + 1, 0);
  let lastDayDate = lastDay.toLocaleDateString()
  const firstDay = new Date(date.getFullYear(), date.getMonth(), 1);
  let firstDayDate = firstDay.toLocaleDateString()
  lastDayDate = lastDayDate.split('/').reverse().join('-')
  firstDayDate = firstDayDate.split('/').reverse().join('-')
  try {
    const response = await fetch(`http://localhost:3002/reservas-by-date/${firstDayDate}/${lastDayDate}`, {
        method: 'GET', headers: {
            'X-Powered-By': 'Express',
            'Content-Type': 'application/json',
            'Connection': 'keep-alive',
            'Keep-Alive': 'timeout=5',
        }
    })
    const result = await response.json()
    return result.data.length
  } catch (error) {
    return
}
}

export default getMonthReserves