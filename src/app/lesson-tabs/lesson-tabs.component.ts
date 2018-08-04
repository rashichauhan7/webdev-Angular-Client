import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {LessonServiceClient} from '../services/lesson.service.client';

@Component({
  selector: 'app-lesson-tabs',
  templateUrl: './lesson-tabs.component.html',
  styleUrls: ['./lesson-tabs.component.css']
})
export class LessonTabsComponent implements OnInit {

  constructor(private service: LessonServiceClient, private route: ActivatedRoute) {
    this.route.params.subscribe(
      params => this.setParams(params));
  }

  moduleId;
  courseId;
  lessonId;
  lessons = [];
  setParams(param)
  {
    this.courseId = param['courseId'];
    this.moduleId = param['moduleId'];
    this.lessonId = param['lessonId'];
    this.loadLessons(this.courseId, this.moduleId);
  }

  loadLessons(courseId, moduleId) {
    this.moduleId = moduleId;
    this.courseId = courseId;
    this.service.findLessonsForModule(courseId, moduleId)
      .then(lessons => this.lessons = lessons);
  }
  ngOnInit() {
  }

}
