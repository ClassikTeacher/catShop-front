export class Product{
    nameProduct: String;
    flavor: String;
    bundlDescription: [];
    weight: String;
    info: String;
    quantity: number;
    id: number

    constructor(nameProduct: String, flavor: String, bundlDescription: [], weight: String, info: String, quantity: number, id: number){
        this.nameProduct = nameProduct
        this.flavor = flavor
        this.bundlDescription = bundlDescription
        this.weight = weight
        this.info = info
        this.quantity = quantity
        this.id = id
    }

    endedProduct(){
        if(this.quantity > 0){
            return true
        }
        return false
    }
}