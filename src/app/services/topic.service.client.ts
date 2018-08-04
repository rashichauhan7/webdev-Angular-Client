export class TopicServiceClient {
  TOPIC_URL = 'https://webdev-summer2-2018-1.herokuapp.com/api/course/CID/module/MID/lesson/LID/topic';
  findAllTopicsForLesson(courseId, moduleID, lessonId) {
    return fetch(this.TOPIC_URL.replace('CID', courseId).replace('MID', moduleID).replace('LID', lessonId))
      .then(response => response.json());
  }
}
