import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {ModuleServiceClient} from '../services/module.service.client';

@Component({
  selector: 'app-module-list',
  templateUrl: './module-list.component.html',
  styleUrls: ['./module-list.component.css']
})
export class ModuleListComponent implements OnInit {

  constructor(private service: ModuleServiceClient, private route: ActivatedRoute) {
    this.route.params.subscribe(params => this.setParam(params));
  }
courseId;
  moduleId;
  modules = [];

  setParam(params) {
    this.courseId = params['courseId'];
    this.moduleId = params['moduleId'];
    this.loadModules(this.courseId);
  }
  loadModules(courseId)  {
  this.courseId = courseId;
  this.service.findModuleForCourse(courseId)
    .then(modules => this.modules = modules);
  }

  ngOnInit() {
  }

}
