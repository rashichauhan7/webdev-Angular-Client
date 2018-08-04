import { Routes, RouterModule} from '@angular/router';
import {WhiteboardComponent} from './whiteboard/whiteboard.component';
import {CourseViewerComponent} from './course-viewer/course-viewer.component';

const appRoutes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'course/:courseId', component: CourseViewerComponent},
  {path: 'course/:courseId/module/:moduleId', component: CourseViewerComponent},
  {path: 'course/:courseId/module/:moduleId/lesson/:lessonId', component: CourseViewerComponent},
  {path: 'course/:courseId/module/:moduleId/lesson/:lessonId/topic/:topicId', component: CourseViewerComponent},
  {path: 'home', component: WhiteboardComponent},
  {path: '**', component: WhiteboardComponent}
];
export const routing = RouterModule.forRoot(appRoutes);
