class Product {
    private _service: string[]

    constructor(service: string[]) {
        this._service = service        
    }

    get service() {
        return this._service
    }

    set service(arr: string[]) {
        this._service = arr
    }

    insertItens(item: string): string[] {
        this._service.push(item)
        return this._service
    }

    removeItens(item: string): string[] {
        let newService = this._service.filter(product => product !== item)
        this._service = newService
        return this._service
    }

}

export default Product


