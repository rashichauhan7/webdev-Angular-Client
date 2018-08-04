import { Component, OnInit } from '@angular/core';
import {TopicServiceClient} from '../services/topic.service.client';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-topic-pills',
  templateUrl: './topic-pills.component.html',
  styleUrls: ['./topic-pills.component.css']
})
export class TopicPillsComponent implements OnInit {

  constructor(private service: TopicServiceClient, private route: ActivatedRoute) {
    this.route.params.subscribe(params => this.setParams(params));
  }

  courseId;
  moduleId;
  lessonId;
  topics = []
  setParams(params) {
    this.courseId = params['courseId'];
    this.moduleId = params['moduleId'];
    this.lessonId = params['lessonId'];
    this.findTopics(this.courseId, this.moduleId, this.lessonId);
  }

  findTopics(courseId, moduleId, lessonId) {
    this.service.findAllTopicsForLesson(courseId, moduleId, lessonId)
      .then(topics => this.topics = topics);
  }
  ngOnInit() {
  }

}
