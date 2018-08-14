import {Injectable} from '@angular/core';

@Injectable()
export class QuizServiceClient {
  createQuiz(quiz) {}
  findAllQuizzes = () =>
    fetch('https://webdev-angular-node-server.herokuapp.com/api/quiz', {
      credentials: 'include'
    })
      .then(response => response.json())
  findQuizById = (quizId) =>
  fetch('https://webdev-angular-node-server.herokuapp.com/api/quiz/' + quizId, {
    credentials: 'include'
  })
      .then(response => response.json())
  updateQuiz(quizId, quiz) {}
  deleteQuiz(quizId) {}

  submitQuiz =  quiz =>
    fetch('https://webdev-angular-node-server.herokuapp.com/api/quiz/' + quiz._id + '/submission', {
      method: 'post',
      body: JSON.stringify(quiz),
      credentials: 'include',
      headers: {
        'content-type': 'application/json',
      }
    })
      .then(response => response.json())

  findQuestionById = qid =>
    fetch('https://webdev-angular-node-server.herokuapp.com/api/question/' + qid, {
      credentials: 'include'
    }).then(res => res.json())
}
