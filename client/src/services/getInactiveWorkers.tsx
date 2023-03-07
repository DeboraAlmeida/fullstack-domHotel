import getIdToken from "utils/getIdToken"

const getInactiveWorkers = async () => {
    try {
        const response = await fetch(`http://localhost:3002/funcionariosInativos`, {
            method: 'GET', headers: {
                'X-Powered-By': 'Express',
                'Content-Type': 'application/json',
                'Connection': 'keep-alive',
                'Keep-Alive': 'timeout=5',
                'Authorization': `Bearer ${getIdToken('admin')}`
            }
        })
        const result = await response.json()
        return result.data
    } catch (error) {
        return
    }
}

export default getInactiveWorkers