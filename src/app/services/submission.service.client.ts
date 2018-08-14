import {Injectable} from '@angular/core';

@Injectable()
export class SubmissionServiceClient {

  findAllSubmissions = quizId =>
    fetch('http://localhost:3000/api/quiz/' + quizId + '/submission', {
      credentials: 'include'
    }).then(res => res.json())

  findAllSubmissionsForStudent = (quizId, sid) =>
    fetch('http://localhost:3000/api/quiz/' + quizId + '/student/' + sid + '/submission', {
      credentials: 'include'
    }).then(res => res.json())

  getSubmission = (qid, sid) =>
fetch('http://localhost:3000/api/quiz/' + qid + '/submission/' + sid, {
  credentials: 'include'
}).then(res => res.json())
}
