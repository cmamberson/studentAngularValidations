import 'rxjs/add/operator/switchMap';
import { Component, OnInit, ViewChild }      from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location }               from '@angular/common';
import { NgForm } from '@angular/forms';

import { DataService } from '../data.service'

@Component({
  selector: 'app-studentclass-form',
  templateUrl: './studentclass-form.component.html',
  styleUrls: ['./studentclass-form.component.css']
})
export class StudentclassFormComponent implements OnInit {

  successMessage: string;
  errorMessage: string;

  studentclass: object;

  getRecordForEdit(){
    this.route.params
      .switchMap((params: Params) => this.dataService.getRecord("studentclass", +params['id']))
      .subscribe(studentclass => this.studentclass = studentclass);
  }

  constructor(
    private dataService: DataService,
    private route: ActivatedRoute,
    private location: Location
  ) {}

  ngOnInit() {
    this.route.params
      .subscribe((params: Params) => {
        (+params['id']) ? this.getRecordForEdit() : null;
      });

  }

  saveStudentclass(studentclass: NgForm){
    if(typeof studentclass.value.student_class_id === "number"){
      this.dataService.editRecord("studentclass", studentclass.value, studentclass.value.student_class_id)
          .subscribe(
            studentclass => this.successMessage = "Record updated succesfully",
            error =>  this.errorMessage = <any>error);
    }else{
      this.dataService.addRecord("studentclass", studentclass.value)
          .subscribe(
            studentclass => this.successMessage = "Record added succesfully",
            error =>  this.errorMessage = <any>error);
            this.studentclass = {};
    }

  }

  studentclassForm: NgForm;
  @ViewChild('studentclassForm') currentForm: NgForm;
  
  ngAfterViewChecked() {
    this.formChanged();
  }

  formChanged() {
    this.studentclassForm = this.currentForm;
    this.studentclassForm.valueChanges
      .subscribe(
        data => this.onValueChanged(data)
      );
  }

  onValueChanged(data?: any) {
    let form = this.studentclassForm.form;

    for (let field in this.formErrors) {
      // clear previous error message (if any)
      this.formErrors[field] = '';
      const control = form.get(field);

      if (control && control.dirty && !control.valid) {
        const messages = this.validationMessages[field];
        for (const key in control.errors) {
          this.formErrors[field] += messages[key] + ' ';
        }
      }
    }
  }

  formErrors = {
    'student_id': '',
    'class_id': ''
  };

  validationMessages = {
    'student_id': {
      'required': 'Student ID is required.',
      'pattern': 'Student ID must be numbers only.'
    },
    'class_id': {
      'required': 'Class ID is required.',
      'pattern': 'Class ID must be numbers only.'
    }
  };

}
