import { Component } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.sass']
})
export class UserComponent {
  firstName: string;
  lastName: string;
  age: number;
  address: object;

  constructor() {
    this.firstName = 'John';
    this.lastName = 'Doe';
    this.age = 30;
    this.address = {
      street: '50 Main st',
      city: 'Boston',
      state: 'MA'
    };
  }
}
