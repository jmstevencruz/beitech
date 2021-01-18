import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { from } from 'rxjs';
import { ListarComponent } from '../app/customers/listar/listar.component';
import { CustomerproductComponent } from '../app/products/customerproduct/customerproduct.component';
import { HeaderComponent } from '../app/plantillas/header/header.component'

const routes: Routes = [
  {path : 'listar' , component : ListarComponent},
  {path : 'customerproduct' , component : CustomerproductComponent},
  {path : 'header' , component : HeaderComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
