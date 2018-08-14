import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import { WhiteboardComponent } from './whiteboard/whiteboard.component';
import {CourseServiceClient} from './services/course.service.client';
import { CourseGridComponent } from './course-grid/course-grid.component';
import { CourseNavigatorComponent } from './course-navigator/course-navigator.component';
import {routing} from './app.routing';
import { CourseViewerComponent } from './course-viewer/course-viewer.component';
import { ModuleListComponent } from './module-list/module-list.component';
import {ModuleServiceClient} from './services/module.service.client';
import { LessonTabsComponent } from './lesson-tabs/lesson-tabs.component';
import {LessonServiceClient} from './services/lesson.service.client';
import { WidgetListComponent } from './widget-list/widget-list.component';
import { TopicPillsComponent } from './topic-pills/topic-pills.component';
import {TopicServiceClient} from './services/topic.service.client';
import {WidgetServiceClient} from './services/widget.service.client';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ProfileComponent } from './profile/profile.component';
import { SectionsComponent } from './sections/sections.component';
import { EnrollmentComponent } from './enrollment/enrollment.component';
import {UserServiceClient} from './services/user.service.client';
import {SectionServiceClient} from './services/section.service.client';
import {SubmissionServiceClient} from './services/submission.service.client';
import { QuizListComponent } from './quiz-list/quiz-list.component';
import {QuizServiceClient} from './services/quiz.service.client';
import { QuizTakerComponent } from './quiz-taker/quiz-taker.component';
import { EssayQuestionComponent } from './essay-question/essay-question.component';
import { FillBlanksComponent } from './fill-blanks/fill-blanks.component';
import { TrueFalseComponent } from './true-false/true-false.component';
import { MultipleChoiceQuestionComponent } from './multiple-choice-question/multiple-choice-question.component';
import { QuizSubmissionsComponent } from './quiz-submissions/quiz-submissions.component';
import { QuizAnswersComponent } from './quiz-answers/quiz-answers.component';

@NgModule({
  declarations: [
    AppComponent,
    WhiteboardComponent,
    CourseGridComponent,
    CourseNavigatorComponent,
    CourseViewerComponent,
    ModuleListComponent,
    LessonTabsComponent,
    WidgetListComponent,
    TopicPillsComponent,
    LoginComponent,
    RegisterComponent,
    ProfileComponent,
    SectionsComponent,
    EnrollmentComponent,
    QuizListComponent,
    QuizTakerComponent,
    EssayQuestionComponent,
    FillBlanksComponent,
    TrueFalseComponent,
    MultipleChoiceQuestionComponent,
    QuizSubmissionsComponent,
    QuizAnswersComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    routing
  ],
  providers: [
    CourseServiceClient,
    ModuleServiceClient,
    LessonServiceClient,
    TopicServiceClient,
    WidgetServiceClient,
    UserServiceClient,
    SectionServiceClient,
    QuizServiceClient,
    SubmissionServiceClient
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
