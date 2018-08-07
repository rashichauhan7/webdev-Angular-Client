import {Injectable} from '@angular/core';

@Injectable()
export class UserServiceClient {
  findUserByUserName = (user) =>
    fetch('http://localhost:4000/api/user', {
      method: 'post',
      credentials: 'include',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(user)
    }).then( response => response)

  register = (user) =>
    fetch('https://webdev-angular-node-server.herokuapp.com/api/register', {
      method: 'post',
      credentials: 'include',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(user)
    })

  login = (user) =>
    fetch('https://webdev-angular-node-server.herokuapp.com/api/login', {
      method: 'post',
      credentials: 'include',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(user)
    }).then(response => response.json())

  logout = () =>  fetch('https://webdev-angular-node-server.herokuapp.com/api/logout', {
    credentials: 'include'
  });

  currentUser = () =>
    fetch('https://webdev-angular-node-server.herokuapp.com/api/currentUser', {
      credentials: 'include'
    }).then(response => response.json())

  updateUser = (user) =>
    fetch('https://webdev-angular-node-server.herokuapp.com/api/profile', {
      method: 'post',
      credentials: 'include',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(user)
    }).then(response => response.json())
}
