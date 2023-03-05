const postContact = async (payload: any) => {
    const {name, email, comment, subject} = payload
    const obj = {
        name,
        email,
        comment,
        subject
    }
    console.log(obj)
    try {
        const response = await fetch(`http://localhost:3002/contato`, {
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
        console.error(`post message failed ${error}`)
        return 'Erro ao cadastrar a mensagem de contato!'
    }
}

export default postContact