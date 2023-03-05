import getIdToken from "utils/getIdToken"

const postExpenditure = async (payload: any) => {
    const {reserve, product} = payload
    const obj = {
        reserve,
        product
    }
    try {
        const response = await fetch(`http://localhost:3002/consumo`, {
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
        return 'Erro ao cadastrar o produto!'
    }
}

export default postExpenditure