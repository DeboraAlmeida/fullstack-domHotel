import getIdToken from "utils/getIdToken"

const postNewEmployee = async (payload: any) => {
    const {name , email, password, office} = payload
    const obj = {
        name,
        email,
        password,
        office
    }
    try {
        const response = await fetch(`http://localhost:3002/funcionariosCadastro`, {
            method: 'POST', headers: {
                'X-Powered-By': 'Express',
                'Content-Type': 'application/json',
                'Connection': 'keep-alive',
                'Keep-Alive': 'timeout=5',
                'Authorization': `Bearer ${getIdToken('admin')}`
            }, body: JSON.stringify(obj)
        })
        const result = await response.json()
        return result.data
    } catch (error) {
        return
    }
}

export default postNewEmployee