import { Component, OnInit, Input, APP_ID } from '@angular/core';
import { Customer } from '../../customer';
import { Inject } from '@angular/core';
import { CustomerService } from 'src/app/customers/customer.service';
import { Product } from '../product';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { element } from 'protractor';


@Component({
  selector: 'app-customerproduct',
  templateUrl: './customerproduct.component.html',
  styleUrls: ['./customerproduct.component.css']
})
export class CustomerproductComponent implements OnInit {

//@Input() customerId : Number;
  products : Product[] = [];
  idProducts : number [] = [];
  signupForm : FormGroup ;

  constructor(public api : CustomerService, 
    private _builder : FormBuilder ) {
    this.products.forEach(element => {
      this.idProducts.push(element.product_id); 
    });
      this.signupForm = this._builder.group({
        
       idProduct : [0, Validators.max(5)]
         
      });
    
  }

  ngOnInit(): void {
    this.api.getProducts(this.api.idCustomer).subscribe(data =>{
      console.log(data);
      this.products = data;
      
    });
    
  }

}
