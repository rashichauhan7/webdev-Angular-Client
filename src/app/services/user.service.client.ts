import {Injectable} from '@angular/core';

@Injectable()
export class UserServiceClient {

  register = (user) =>
    fetch('http://localhost:4000/api/register', {
      method: 'post',
      credentials: 'include',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(user)
    })

  login = (user) =>
    fetch('http://localhost:4000/api/login', {
      method: 'post',
      credentials: 'include',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(user)
    }).then(response => response.json())

  currentUser = () =>
    fetch('http://localhost:4000/api/currentUser', {
      credentials: 'include'
    }).then(response => response.json())

  updateUser = (user) =>
    fetch('http://localhost:4000/api/profile', {
      method: 'post',
      credentials: 'include',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(user)
    }).then(response => response.json())
}
