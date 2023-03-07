import PayloadContact from "interfaces/payloadContact"

const postContact = async (payload: PayloadContact) => {
    try {
        const response = await fetch(`http://localhost:3002/contato`, {
            method: 'POST', headers: {
                'X-Powered-By': 'Express',
                'Content-Type': 'application/json',
                'Connection': 'keep-alive',
                'Keep-Alive': 'timeout=5',
            }, body: JSON.stringify(payload) 
        })
        const result = await response.json()
        return result.data
    } catch (error) {
        return 'Erro ao cadastrar a mensagem de contato!'
    }
}

export default postContact