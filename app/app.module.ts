import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent }  from './app.component';


import { CustomerComponent } from './customer/customer.Component';
import { CustomersComponent } from './customer/customers.Component';




@NgModule({
  imports: [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, CustomerComponent, CustomersComponent ],
  bootstrap: [ AppComponent ]
})
export class AppModule {}
