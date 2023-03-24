import getIdToken from "utils/getIdToken"

const getActiveReservesbyId = async () => {
    try {
        const response = await fetch(`http://localhost:3002/reservas/:id`, {
            method: 'GET', headers: {
                'X-Powered-By': 'Express',
                'Content-Type': 'application/json',
                'Connection': 'keep-alive',
                'Keep-Alive': 'timeout=5',
                'Authorization': `Bearer ${getIdToken('user')}`
            }
        })
        const result = await response.json()
        return result.enableCoupon
    } catch (error) {
        return false
    }
}

export default getActiveReservesbyId