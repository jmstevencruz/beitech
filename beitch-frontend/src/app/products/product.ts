import { Customer } from "../customer";

export class Product {

    product_id : number;
    name : string;
    product_description : string;
    price : number;
    customers : Customer [];

    constructor (product_id : number, name : string, product_description : string, price : number, customers : Customer[]) {
        this.product_id = product_id;
        this.name = name;
        this.product_description = product_description;
        this.price = price;
        this.customers = customers;
    }
}
