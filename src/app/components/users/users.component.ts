import { Component, OnInit } from '@angular/core';
import { User } from '../../Models/User';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.sass']
})
export class UsersComponent implements OnInit {
  constructor() {}
  users: User[];
  showExtended = true;
  loaded = false;

  ngOnInit() {
    setTimeout(() => {
      this.users = [
        {
          firstName: 'John',
          lastName: 'Doe',
          age: 30,
          address: {
            street: '50 Main St',
            city: 'Boston',
            state: 'MA'
          }
        },
        {
          firstName: 'Jane',
          lastName: 'Doe',
          age: 25,
          address: {
            street: '20 School St',
            city: 'Lynn',
            state: 'MA'
          }
        },
        {
          firstName: 'Eric',
          lastName: 'Moyen',
          age: 18,
          address: {
            street: '55 Mill St',
            city: 'Miami',
            state: 'FL'
          }
        }
      ];

      this.addUser({
        firstName: 'Bob',
        lastName: 'Cratchet'
      });
      this.loaded = true;
    }, 2000);
  }
  addUser(user: User) {
    this.users.push(user);
  }
}
