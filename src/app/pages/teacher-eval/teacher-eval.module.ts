import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TeacherEvalRoutingModule } from './teacher-eval-routing.module';
import { EvaluationTypeComponent } from './evaluation-type/evaluation-type.component';
import { QuestionComponent } from './question/question.component';
import { AnswerComponent } from './answer/answer.component';

import {MessageModule} from 'primeng/message';

@NgModule({
  declarations: [EvaluationTypeComponent, QuestionComponent, AnswerComponent],
  imports: [
    CommonModule,
    TeacherEvalRoutingModule,
    MessageModule,

  ]
})
export class TeacherEvalModule { }
