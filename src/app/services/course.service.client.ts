import {Injectable} from '@angular/core';

@Injectable()
export class CourseServiceClient {
  COURSE_URL = 'https://webdev-summer2-2018-1.herokuapp.com/api/course';
  findAllCourses() {
    return fetch(this.COURSE_URL)
    .then(response => response.json());
  }

  findCourseById(courseId) {
    return fetch(this.COURSE_URL + '/' + courseId)
      .then(response => response.json());
  }

}
