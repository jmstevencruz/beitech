import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Customer } from '../customer';
import { Product } from '../products/product';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  private url : string = "http://localhost:8080"; 

  idCustomer : number = 0;


  constructor( private http : HttpClient) { }

  /*Obtener Customeers (Clientes)*/
  getCustomers():Observable<Customer[]>{
    let direccion = this.url + "/customers";
    return this.http.get<Customer[]>(direccion);
  }

  getProducts(idCustomer : number):Observable<Product[]>{
    let direccion = this.url + "/products/";
    //const headers = new HttpHeaders({'params':'valor'});
    let header = new HttpHeaders({
      "Content-Type": "application/json",
      'idCustomer': idCustomer.toString()
  });
    return this.http.get<Product[]>(direccion, {headers : header});  
  }
  

}
