import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {SubmissionServiceClient} from '../services/submission.service.client';
import {UserServiceClient} from '../services/user.service.client';
import {QuizServiceClient} from '../services/quiz.service.client';
import {until} from 'selenium-webdriver';
import elementIsSelected = until.elementIsSelected;

@Component({
  selector: 'app-quiz-submissions',
  templateUrl: './quiz-submissions.component.html',
  styleUrls: ['./quiz-submissions.component.css']
})
export class QuizSubmissionsComponent implements OnInit {

  constructor(private router: ActivatedRoute, private submissionService: SubmissionServiceClient,
              private userService: UserServiceClient, private quizService: QuizServiceClient) {
    this.router.params.subscribe(params => this.getSubmissions(params['quizId']));
  }

  currentUser = {
    id: ''
  };

  submissions = [
  ];
  sub = [];
  quiz = {
    title: ''
  }
  search = '';
  ngOnInit() {
  }

  getSubmissions(quizId) {
    this.quizService.findQuizById(quizId)
      .then(quiz => this.quiz = quiz);
    this.userService.currentUser()
      .then(user => {
        this.currentUser.id = user._id;
        if (user.username.localeCompare('admin') !== 0) {
          this.submissionService.findAllSubmissionsForStudent(quizId, this.currentUser.id)
            .then((submissions) => {this.submissions = submissions;  this.sub = submissions; });
        } else {
          this.submissionService.findAllSubmissions(quizId)
            .then((submissions) => {this.submissions = submissions;  this.sub = submissions; });
        }
  });
  }
  filterResults(newValue) {
    this.search = newValue;
  this.sub = this.submissions.filter((s) => {
    if ( s.student.username.toString().startsWith(this.search)) {
      return true;
    } else {
      return false;
    }
  });
  console.log(this.sub);
}
}
