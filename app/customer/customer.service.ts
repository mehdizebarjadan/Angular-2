import { Injectable } from '@angular/core';

@Injectable()
export class CustomerService {

    constructor() { }

    getCustomers() {
        return  [
            {id: 1, name: 'Armin'},
            {id: 2, name: 'Pouya'},
            {id: 3, name: 'Ardavan'},
            {id: 4, name: 'Amir'},
            {id: 5, name: 'Masoud'}
        ];

    }
}
