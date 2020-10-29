import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TeacherEvalRoutingModule } from './teacher-eval-routing.module';
import { EvaluationTypeComponent } from './evaluation-type/evaluation-type.component';
import { QuestionComponent } from './question/question.component';
import { AnswerComponent } from './answer/answer.component';


@NgModule({
  declarations: [EvaluationTypeComponent, QuestionComponent, AnswerComponent],
  imports: [
    CommonModule,
    TeacherEvalRoutingModule
  ]
})
export class TeacherEvalModule { }
