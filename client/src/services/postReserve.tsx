const postReserve = async (payload: any) => {
    const {userData, moreService, reserva} = payload
    const obj = {
        userData,
        reserva,
        moreService
    }
    try {
        const response = await fetch(`http://localhost:3002/reserva`, {
            method: 'POST', headers: {
                'X-Powered-By': 'Express',
                'Content-Type': 'application/json',
                'Connection': 'keep-alive',
                'Keep-Alive': 'timeout=5',
            }, body: JSON.stringify(obj) 
        })
        const result = await response.json()
        return result.data
    } catch (error) {
        console.error(`post reserves failed ${error}`)
        return
    }
}

export default postReserve