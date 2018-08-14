import {Injectable} from '@angular/core';

@Injectable()
export class QuizServiceClient {
  createQuiz(quiz) {}
  findAllQuizzes = () =>
    fetch('http://localhost:3000/api/quiz', {
      credentials: 'include'
    })
      .then(response => response.json())
  findQuizById = (quizId) =>
  fetch('http://localhost:3000/api/quiz/' + quizId, {
    credentials: 'include'
  })
      .then(response => response.json())
  updateQuiz(quizId, quiz) {}
  deleteQuiz(quizId) {}

  submitQuiz =  quiz =>
    fetch('http://localhost:3000/api/quiz/' + quiz._id + '/submission', {
      method: 'post',
      body: JSON.stringify(quiz),
      credentials: 'include',
      headers: {
        'content-type': 'application/json',
      }
    })
      .then(response => response.json())

  findQuestionById = qid =>
    fetch('http://localhost:3000/api/question/' + qid, {
      credentials: 'include'
    }).then(res => res.json())
}
