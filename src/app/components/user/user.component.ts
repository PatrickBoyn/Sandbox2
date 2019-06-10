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

  constructor() {
    console.log('Hello User...');
    this.sayHello();
  }

  sayHello() {
    console.log(`Hello ${this.firstName}`);
  }

  hasBirtday() {}
}
