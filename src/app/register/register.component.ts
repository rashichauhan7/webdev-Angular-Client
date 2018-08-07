import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {UserServiceClient} from '../services/user.service.client';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  username: String;
  password: String;
  verifyPassword: String;
  firstName: String;
  lastName: String;
  email: String;
  constructor(private router: Router, private userService: UserServiceClient) { }
  register = (username, password, verifyPassword, firstName, lastName, email) => {

    const user = {
      username: username,
      password: password,
      verifyPassword: verifyPassword,
      firstName: firstName,
      lastName: lastName,
      email: email,
      address: '',
      phoneNo: ''
    };
    console.log(user);
    if (this.password === this.verifyPassword) {
      this.userService.register(user)
        .then(u => this.router.navigate(['/home/profile']));
    }
    else {
      alert("Passwords don't match");
    }
  }

  ngOnInit() {
  }

}
