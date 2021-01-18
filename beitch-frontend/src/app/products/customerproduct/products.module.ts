import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomerproductComponent } from './customerproduct.component';
import { CustomersModule } from 'src/app/customers/customers.module';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    CustomersModule
  ],
  exports : [
    CustomerproductComponent
  ]
})
export class ProductsModule { }
