import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {QuizServiceClient} from '../services/quiz.service.client';

@Component({
  selector: 'app-quiz-taker',
  templateUrl: './quiz-taker.component.html',
  styleUrls: ['./quiz-taker.component.css']
})
export class QuizTakerComponent implements OnInit {

  constructor(private router: ActivatedRoute, private service: QuizServiceClient) { }

  quizId = '';
  quiz = {
    title: '',
    questions : []
  };

  submitQuiz(quiz)
  {
    console.log(quiz);
  }
  ngOnInit() {
    this.router.params.subscribe(params => this.service
      .findQuizById(params['quizId'])
      .then(quiz => this.quiz = quiz));
  }

}
