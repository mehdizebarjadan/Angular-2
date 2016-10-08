import { Component, Input, OnInit } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'app-customer',
    // templateUrl: './app/customer/customer.component.html'
    templateUrl: 'customer.component.html'
})
export class CustomerComponent implements OnInit {
    // @Input() customer: any;
    @Input() customer: { id: number, name: string };

    myColour = 'Green';

    constructor() { }

    ngOnInit() { }
}



