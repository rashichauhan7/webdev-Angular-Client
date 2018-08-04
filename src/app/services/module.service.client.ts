export class ModuleServiceClient {
  MODULE_URL = 'https://webdev-summer2-2018-1.herokuapp.com/api/course/CID/module';
  findModuleForCourse(courseId) {
    return fetch(this.MODULE_URL.replace('CID', courseId))
      .then(response => response.json());
  }
}
