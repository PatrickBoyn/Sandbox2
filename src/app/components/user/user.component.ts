import { Component } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.sass']
})
export class UserComponent {
  firstName = 'John';
  lastName = 'Doe';
  age = 30;
  address = {
    street: '50 Main St',
    city: 'Boston',
    state: 'MA'
  };

  constructor() {}

  sayHello() {
    console.log(`Hello ${this.firstName}`);
  }

  hasBirtday() {
    this.age += 1;
  }
}
