export class LessonServiceClient {
  LESSONS_URL = 'https://webdev-summer2-2018-1.herokuapp.com/api/course/CID/module/MID/lesson';

  findLessonsForModule(courseId, moduleId)  {
    return fetch(this.LESSONS_URL.replace('CID', courseId).replace('MID', moduleId))
      .then(response => response.json());
  }
}
