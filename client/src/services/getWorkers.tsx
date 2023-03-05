const getWorkers = async () => {
    try {
        const response = await fetch(`http://localhost:3002/funcionarios`, {
            method: 'GET', headers: {
                'X-Powered-By': 'Express',
                'Content-Type': 'application/json',
                'Connection': 'keep-alive',
                'Keep-Alive': 'timeout=5',
            }
        })
        const result = await response.json()
        return result.data
    } catch (error) {
        console.error(`get workers failed ${error}`)
        return
    }
}

export default getWorkers