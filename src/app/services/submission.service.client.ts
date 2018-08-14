import {Injectable} from '@angular/core';

@Injectable()
export class SubmissionServiceClient {

  findAllSubmissions = quizId =>
    fetch('https://webdev-angular-node-server.herokuapp.com/api/quiz/' + quizId + '/submission', {
      credentials: 'include'
    }).then(res => res.json())

  findAllSubmissionsForStudent = (quizId, sid) =>
    fetch('https://webdev-angular-node-server.herokuapp.com/api/quiz/' + quizId + '/student/' + sid + '/submission', {
      credentials: 'include'
    }).then(res => res.json())

  getSubmission = (qid, sid) =>
fetch('https://webdev-angular-node-server.herokuapp.com/api/quiz/' + qid + '/submission/' + sid, {
  credentials: 'include'
}).then(res => res.json())
}
