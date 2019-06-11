import { Component, OnInit } from '@angular/core';
import { User } from '../../Models/User';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.sass']
})
export class UsersComponent implements OnInit {
  users: User;

  constructor() {
    console.log('From the constructor.');
  }

  ngOnInit() {
    console.log('Init....');
  }
}
