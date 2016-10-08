import { Component, OnInit } from '@angular/core';

// import { CustomerComponent } from './customer/customer.Component'; --> Moved to app.module.ts
import { CustomerService } from './customer.service';

@Component({
    moduleId: module.id,
    selector: 'app-customers',
    // templateUrl: './app/customer/customers.component.html'
    templateUrl: 'customers.component.html',
    // directives: [CustomerComponent] --> should be removed
    providers: [CustomerService]
})
export class CustomersComponent implements OnInit {
   customers: any[];

    constructor(private _customerService: CustomerService) { }

    ngOnInit() {
        this.customers = this._customerService.getCustomers();
     }
}
