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

  sectionsCourse = [];
  sectionsStudent = [];
  user = {
    _id: '',
    msg: 'x'
  };
  courseId = '';
  constructor(private router: ActivatedRoute, private sectionService: SectionServiceClient, private userService: UserServiceClient) {
    this.router.params.subscribe(params => this.setCourse(params['courseId']));
  }
  setCourse = courseId =>
    this.courseId = courseId

  enroll = sectionId => {
    this.sectionService
      .enroll(this.user._id, sectionId);
    this.getSections();
  }

  ngOnInit() {
    this.userService.currentUser()
      .then((user) => {
          this.user = user;
          this.getSections();
        }
    );
  }
  getSections() {
        this.sectionService.findSectionsForCourse(this.courseId)
          .then(sections => {
            this.sectionsCourse = sections;
            this.sectionService.findAllSectionsForStudent(this.user._id)
              .then(section => {
                this.sectionsCourse = sections.filter(
                  s => {
                    for (let sec in section) {
                      let ss = section[sec];
                      if ( JSON.stringify(ss.section) === JSON.stringify(s)) {
                        return false;
                      }
                    }
                    return true;
                  }
                );
                this.sectionsStudent = sections.filter(
                  s => {
                    for (let sec in section) {
                      let ss = section[sec];
                      if ( JSON.stringify(ss.section) === JSON.stringify(s) ) {
                        return true;
                      }
                    }
                    return false;
                  }
                );
              });

          });
  }


}
