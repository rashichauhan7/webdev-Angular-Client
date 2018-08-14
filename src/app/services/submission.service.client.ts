import {Injectable} from '@angular/core';

@Injectable()
export class SubmissionServiceClient{
 findAllSubmissions =  quizId =>
  fetch('http://localhost:3000/api/quiz/' + quizId + '/submission')
    .then(res => res.json())
}
