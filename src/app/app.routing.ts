import { Routes, RouterModule} from '@angular/router';
import {WhiteboardComponent} from './whiteboard/whiteboard.component';
import {CourseViewerComponent} from './course-viewer/course-viewer.component';
import {LoginComponent} from './login/login.component';
import {RegisterComponent} from './register/register.component';
import {ProfileComponent} from './profile/profile.component';
import {SectionsComponent} from './sections/sections.component';
import {EnrollmentComponent} from './enrollment/enrollment.component';
import {CourseNavigatorComponent} from './course-navigator/course-navigator.component';
import {QuizListComponent} from './quiz-list/quiz-list.component';
import {QuizTakerComponent} from './quiz-taker/quiz-taker.component';

const appRoutes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'course/:courseId', component: CourseViewerComponent},
  {path: 'course/:courseId/module/:moduleId', component: CourseViewerComponent},
  {path: 'course/:courseId/module/:moduleId/lesson/:lessonId', component: CourseViewerComponent},
  {path: 'course/:courseId/module/:moduleId/lesson/:lessonId/topic/:topicId', component: CourseViewerComponent},
  {path: 'home', component: WhiteboardComponent},
  {path: 'home/login', component: LoginComponent},
  {path: 'course/:courseId/enroll', component: EnrollmentComponent },
  {path: 'home/register', component: RegisterComponent },
  {path: 'home/profile', component: ProfileComponent },
  {path: 'home/sections', component: SectionsComponent },
  {path: 'home/courses', component: CourseNavigatorComponent},
  {path: 'home/quizzes', component: QuizListComponent},
  {path: 'quiz/:quizId', component: QuizTakerComponent},
  {path: '**', component: WhiteboardComponent}
];
export const routing = RouterModule.forRoot(appRoutes);
