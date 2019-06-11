import { Component } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.sass']
})
export class UserComponent {
  user: User;
  constructor() {
    this.user = {
      firstName: 'John',
      lastName: 'Doe',
      age: 30,
      address: {
        street: '50 Main St',
        city: 'Boston',
        state: 'MA'
      }
    };
  }
}

interface User {
  firstName: string;
  lastName: string;
  age: number;
  address: {
    street: string
    city: string
    state: string
  };
}
