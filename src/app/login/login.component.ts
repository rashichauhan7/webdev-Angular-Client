import { Component, OnInit } from '@angular/core';
import {UserServiceClient} from '../services/user.service.client';
import {Router} from '@angular/router';

@Component({

  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']

})

export class LoginComponent implements OnInit {

  username: String;
  password: String;

  constructor(private router: Router, private userService: UserServiceClient) { }
  login = (username, password) => {

    const user = {
      username: username,
      password: password
    };
    console.log(user);
     this.userService.login(user)
       .then(u => {
         if (u.user === undefined) {
           this.router.navigate(['/home/profile']);
         }
         else {
           alert("Incorrect username or password");
         }
       });
  }

  ngOnInit() {
  }

}
