import { Component, OnInit } from '@angular/core';
import {SectionServiceClient} from '../services/section.service.client';
import {UserServiceClient} from '../services/user.service.client';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-enrollment',
  templateUrl: './enrollment.component.html',
  styleUrls: ['./enrollment.component.css']
})
export class EnrollmentComponent implements OnInit {

  sections = [];
  user = {
    _id: ''
  };
  courseId = '';
  constructor(private router: ActivatedRoute, private sectionService: SectionServiceClient, private userService: UserServiceClient) {
    this.router.params.subscribe(params => this.setCourse(params['courseId']));
  }
  setCourse = courseId =>
    this.courseId = courseId

  enroll = sectionId =>
    this.sectionService
      .enroll(this.user._id, sectionId)
  ngOnInit() {
    this.userService.currentUser()
      .then((user) => {
        this.user = user;
        this.sectionService.findSectionsForCourse(this.courseId)
          .then(sections => this.sections = sections);
      });
  }
}
