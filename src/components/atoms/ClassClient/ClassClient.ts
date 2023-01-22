
class Client {
    private clientes: object[]

    constructor(clientes: object[]) {
        this.clientes = clientes
    }

    get client() {
        return this.clientes
    }

    set client(obj: object[]) {
        this.clientes = obj
    }

    insertClients(_id:number, _nome: string): object[] {
        this.clientes.push({
            id: _id,
            nome: _nome
        })
        return this.clientes
    }

}

export default Client