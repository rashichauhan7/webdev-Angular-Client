import {Injectable} from '@angular/core';

@Injectable()
export class SectionServiceClient {

  enroll = (sid, sectionId) =>
    fetch('http://localhost:4000/api/student/' + sid + '/section/' + sectionId + '/enroll', {
      method: 'post',
      credentials: 'include'
    })

  unenroll = (sid, sectionId) =>
    fetch('http://localhost:4000/api/student/' + sid + '/section/' + sectionId + '/unenroll', {
      method: 'post',
      credentials: 'include'
    })

  findAllSectionsForStudent = sid =>
    fetch('http://localhost:4000/api/student/' + sid + '/section')
      .then(response => response.json())

  findSectionsForCourse = courseId =>
    fetch('http://localhost:4000/api/course/' + courseId + '/section')
      .then(response => response.json())

  createSection = (courseId, section) =>
    fetch('http://localhost:4000/api/course/' + courseId + '/section', {
      method: 'post',
      headers: {
        'content-type': 'application/json'
      },
      credentials: 'include',
      body: JSON.stringify(section)
    })
      .then(response => response.json())
  deleteSection = (courseId, sectionId) =>
    fetch('http://localhost:4000/api/course/' + courseId + '/section/' + sectionId, {
      method: 'delete',
      credentials: 'include'
    })
  updateSection = (courseId, section) =>
    fetch('http://localhost:4000/api/course/' + courseId + '/section', {
      method: 'put',
      headers: {
        'content-type': 'application/json'
      },
      credentials: 'include',
      body: JSON.stringify(section)
    })
      .then(response => response.json())
}
