import { Component } from '@angular/core';

// import { CustomersComponent } from './customer/customers.Component';

@Component({
    moduleId: module.id,
    selector: 'my-app',
    // templateUrl: './app/app.component.html',
    templateUrl: 'app.component.html',
    // directives: [CustomersComponent]
})
export class AppComponent {

    // [] means property binding - Component to DOM
    // () means event binding - DOM to Component

    title = 'Customer App';
    name = 'Mehdi';
    itemColor = 'red';


    changeColor() {
        // this.itemColor = 'blue';
        this.itemColor = this.itemColor === 'blue' ? 'red' : 'blue';
    }
 }
