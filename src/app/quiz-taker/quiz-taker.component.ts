import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {QuizServiceClient} from '../services/quiz.service.client';

@Component({
  selector: 'app-quiz-taker',
  templateUrl: './quiz-taker.component.html',
  styleUrls: ['./quiz-taker.component.css']
})
export class QuizTakerComponent implements OnInit {

  constructor(private route: Router, private router: ActivatedRoute, private service: QuizServiceClient) { }

  quizId = '';
  quiz = {
    title: '',
    questions : [],
    timestamp: ''
  };
  cancelQuiz()  {
    this.route.navigate(['/', 'home']);
  }
  submitQuiz(quiz) {
    this.quiz.timestamp = Date();
    alert('Quiz Submitted');
    this.service
      .submitQuiz(quiz)
      .then(submission => {
        console.log(submission);
        this.route.navigate(['/', 'home']);
      });
  }
  ngOnInit() {
    this.router.params.subscribe(params => this.service
      .findQuizById(params['quizId'])
      .then(quiz => this.quiz = quiz));
  }

}
