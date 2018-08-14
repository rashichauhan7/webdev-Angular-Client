import {Component, Input, OnInit} from '@angular/core';
import {SubmissionServiceClient} from '../services/submission.service.client';
import {ActivatedRoute} from '@angular/router';
import {QuizServiceClient} from '../services/quiz.service.client';
import {UserServiceClient} from '../services/user.service.client';

@Component({
  selector: 'app-quiz-answers',
  templateUrl: './quiz-answers.component.html',
  styleUrls: ['./quiz-answers.component.css']
})
export class QuizAnswersComponent implements OnInit {


  constructor(private subService: SubmissionServiceClient, private router: ActivatedRoute,
              private userService: UserServiceClient, private quizService: QuizServiceClient) {
    this.router.params.subscribe(params => this.getParams(params));
  }

  sid = '';
  answers = [];
  quiz = {};
  question = {questionType: ''}
  getParams(params) {
            this.subService.getSubmission(params['quizId'], params['sid'])
            .then(sub => {
             this.answers = sub.answers;
             this.quiz = sub.quiz;
            });

  }

  ngOnInit() {
  }


}
