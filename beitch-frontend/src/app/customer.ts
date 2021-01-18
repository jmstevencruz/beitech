import { Product } from "./products/product";

export class Customer {

    customer_id : number;
    name : string ;
    email : string;
    products : Product [];
    
    constructor (customer_id : number, name : string, email : string, products : Product[]) {
        this.customer_id = customer_id;
        this.name = name;
        this.email = email;
        this.products = products;
    }
}
