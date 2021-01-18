import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../customer.service';
import { Router } from "@angular/router";
import { Customer } from '../../customer';

@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.css']
})
export class ListarComponent implements OnInit {


  customers : Customer[] = [];

  constructor( private api : CustomerService , private router : Router) { }

  ngOnInit(): void {
    this.api.getCustomers().subscribe(data =>{
      console.log(data);
      this.customers = data;
      
    });
  }

  createOrder(id : number) {
    this.api.idCustomer = id;
    this.router.navigate(['customerproduct']);
  }

}
