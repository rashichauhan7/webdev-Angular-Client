import { Component, OnInit } from '@angular/core';
import {CourseServiceClient} from '../services/course.service.client';
import {SectionServiceClient} from '../services/section.service.client';

 @Component({
  selector: 'app-sections',
  templateUrl: './sections.component.html',
  styleUrls: ['./sections.component.css']
})

export class SectionsComponent implements OnInit {

   courses = []
   sections = []
   edit = false;
   selectedCourse = {
     id: -1,
     title: ''
   }
   section = {
     name : '',
     seats: ''
   }

   constructor(private sectionService: SectionServiceClient,
               private courseService: CourseServiceClient) {
   }

   selectCourse = course => {
     this.edit = false;
     this.selectedCourse = course;
     this.section = {
       name : '',
       seats: ''
     }

     this.section.name = this.selectedCourse.title + ' Section 1';
     this.sectionService
       .findSectionsForCourse(course.id)
       .then(sections => this.sections = sections);
   }

   addSection = section => {
     section.courseId = this.selectedCourse.id;
     if(section.name.localeCompare('') === 0)
       section.name = this.selectedCourse.title + ' Section 1';
     if(section.seats.localeCompare('') === 0)
       section.seats = '0';
     this.sectionService
       .createSection(section.courseId, section)
       .then(() => {
         return this.sectionService
           .findSectionsForCourse(this.selectedCourse.id);
       })
       .then(sections => {
         this.sections = sections;
          section.name = '';
          section.seats = '';
       });
   }


   deleteSection(section) {
     this.sectionService.deleteSection(this.selectedCourse.id, section._id)
       .then(() =>
       this.selectCourse(this.selectedCourse));
   }

   editSection(section) {
     this.edit = true;
     this.section = section;
   }

   updateSection() {
     this.edit = false;
      this.sectionService.updateSection(this.selectedCourse.id, this.section)
        .then(() =>
          this.selectCourse(this.selectedCourse));
   }
   ngOnInit() {
     this.courseService.findAllCourses()
       .then(courses => this.courses = courses);
   }

 }
