import { Component, OnInit } from '@angular/core';
import {CourseServiceClient} from '../services/course.service.client';

@Component({
  selector: 'app-course-navigator',
  templateUrl: './course-navigator.component.html',
  styleUrls: ['./course-navigator.component.css']
})
export class CourseNavigatorComponent implements OnInit {



  courses = [];
  selectedCourse = {
    modules: []
  };
  selectedModule = {
    lessons: []
  };
  selectedLesson = {
    topic: []
  };
  selectedTopic = {
    widgets: []
  };
  courseTitle: string;
  constructor(private courseService: CourseServiceClient) { }

  selectCourse(course)  {
    this.selectedCourse = course;
    this.selectedModule = {  lessons: []};
  }

  deleteCourse(courseId) {
    this.courses =
      this.courses
        .filter(course =>
          course.id !== courseId);
  }

  addCourse(courseTitle) {
    const largestId = Math.max.apply(
      Math, this.courses.map(
        function(course) {
          return course.id; }));
    this.courses.push(
      {title: courseTitle, id: largestId + 1}
    );
    this.courseTitle = '';
  }

  selectModule(module) {
    this.selectedModule = module;
    this.selectedLesson = { topic: []};
  }

  selectLesson(lesson) {
    this.selectedLesson = lesson;
    this.selectedTopic = { widgets: []};
  }

  selectTopic(topic) {
    this.selectedTopic = topic;
  }
  ngOnInit() {
    this.courseService
      .findAllCourses()
      .then(courses => this.courses = courses);
  }

}

