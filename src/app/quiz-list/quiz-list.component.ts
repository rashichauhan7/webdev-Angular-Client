import { Component, OnInit } from '@angular/core';
import {QuizServiceClient} from '../services/quiz.service.client';
import {UserServiceClient} from '../services/user.service.client';

@Component({
  selector: 'app-quiz-list',
  templateUrl: './quiz-list.component.html',
  styleUrls: ['./quiz-list.component.css']
})
export class QuizListComponent implements OnInit {

  constructor(private service: QuizServiceClient, private userService : UserServiceClient) { }
  quizzes = [];
  currentuser = {username: ''};
  ngOnInit() {
    this.userService.currentUser()
      .then(user => this.currentuser = user);
    this.service.findAllQuizzes()
      .then(quizzes => this.quizzes = quizzes);
  }

}
