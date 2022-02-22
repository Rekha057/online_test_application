import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { QuizListComponent } from './components/quiz-list/quiz-list/quiz-list.component';
import { QuizComponent } from './components/quiz/quiz/quiz.component';
import { RouterModule, Routes } from '@angular/router'
import { QuizService } from './services/quiz.service';

const routes: Routes = [
  { path: 'quiz/:quizName', component: QuizComponent },
  { path: 'quiz', component: QuizListComponent },
  { path: '', redirectTo: '/quiz', pathMatch: 'full' },
  { path: '**', redirectTo: '/quiz', pathMatch: 'full' },
];
@NgModule({
  declarations: [
    AppComponent,
    QuizListComponent,
    QuizComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
  ],
  providers: [QuizService],
  bootstrap: [AppComponent],
})
export class AppModule { }
