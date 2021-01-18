import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { ListarComponent } from './customers/listar/listar.component'
import { HttpClientModule } from '@angular/common/http';
import { CustomerproductComponent } from './products/customerproduct/customerproduct.component';
import { HeaderComponent } from './plantillas/header/header.component';


@NgModule({
  declarations: [
    AppComponent,
    ListarComponent,
    CustomerproductComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
