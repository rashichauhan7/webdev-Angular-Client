import { Component, OnInit } from '@angular/core';
import {UserServiceClient} from '../services/user.service.client';
import {SectionServiceClient} from '../services/section.service.client';

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
    address: '',
    _id: ''
  };
  sections = [ ];

  constructor(private userService: UserServiceClient, private sectionservice: SectionServiceClient) { }

  ngOnInit() {
    this.userService.currentUser()
      .then(user => {this.currentUser = user;
      if (user.username.localeCompare('admin') !== 0) {
        document.getElementById('viewSections').style.visibility = 'hidden';
      }
        this.sectionservice.findAllSectionsForStudent(this.currentUser._id)
          .then(sections => {
            this.sections = sections;
            console.log(sections);
          });
      });

  }
  drop(sectionId) {
    this.sectionservice.unenroll(this.currentUser._id, sectionId)
      .then(() =>
        this.sectionservice.findAllSectionsForStudent(this.currentUser._id)
          .then(sections => this.sections = sections)
      );
  }
  update () {
    this.userService.updateUser(this.currentUser)
      .then((u) => {
          alert('User updated');
        }
      );
  }

  logout () {
    this.userService.logout();
  }
}

