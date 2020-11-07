import { Component, OnInit } from '@angular/core';
import {EvaluationType} from '../../../models/teacher-eval/evaluation-type';
import {TeacherEvalService} from '../../../services/teacher-eval/teacher-eval.service';
import { ConfirmationService,  MessageService, SelectItem } from 'primeng/api';
import { HttpClient } from '@angular/common/http';
import { NgxSpinnerService } from 'ngx-spinner';
;
@Component({
  selector: 'app-evaluation-type',
  templateUrl: './evaluation-type.component.html',
  styleUrls: ['./evaluation-type.component.css']
})
export class EvaluationTypeComponent implements OnInit {
  evaluationtypes: Array<EvaluationType>;
  evaluationtypeSelec: EvaluationType;
  validacion: any;
  

  constructor( private teacherEvalService: TeacherEvalService, private http: HttpClient,
    private spinnerService: NgxSpinnerService,) {
    this.evaluationtypes= new Array<EvaluationType>();
    
  }

  ngOnInit() : void{
    this.getEvaluationType();
  }

  getEvaluationType() {
    this.spinnerService.show();

    console.log('hola');
      this.teacherEvalService.get('evaluation_types').subscribe(
        response => {
          this.spinnerService.hide();
          this.evaluationtypes = response['data'];
          console.log(response);
          console.log('es esto',this.evaluationtypes);
        },
        error => {
          console.log('error')
      });
  }

  postEvaluationType() {
    console.log('post');
    for (let i = 0; i < this.evaluationtypes.length; i++) {
      if (this.evaluationtypes[i].name == this.evaluationtypeSelec.name) {
          this.validacion = false;
      } else {
              this.validacion = true;
      }
  }
  if (this.validacion) {
          this.teacherEvalService.post('evaluationTypes', {'evaluationTypes': this.evaluationtypeSelec}).subscribe(
            response => {
              this.evaluationtypeSelec = new EvaluationType();
              this.getEvaluationType();
              console.log(response);
            },
            error => {
              console.log('error');
            }
          );
      //   } else {
      //       alert('Registros no validos');
      //   }
  } else {
      alert ('El registro evaluacion esta duplicado porfavor intente con otro numero');
      // Swal.fire(
      //      'error',
      //      'El registro evaluacion esta duplicado por favor intente con otro numero',
      //      'error'
      //     //  'Something went wrong!'
     // );
      this.evaluationtypeSelec = new EvaluationType();
  }
}
  

}
