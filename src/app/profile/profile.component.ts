import { Component, OnInit } from '@angular/core';
import {UserServiceClient} from '../services/user.service.client';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  currentUser = {
    username: '',
    password: '',
    firstName: '',
    lastName: '',
    email: '',
    phoneNo: '',
    address: ''
  };


  constructor(private userService: UserServiceClient) { }

  ngOnInit() {
    this.userService.currentUser()
      .then(user => this.currentUser = user);

  }
  update () {
    this.userService.updateUser(this.currentUser)
      .then((u) => {
          alert('User updated');
        }
      );
  }
}

