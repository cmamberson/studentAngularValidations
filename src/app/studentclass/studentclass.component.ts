import { Component, OnInit,Input } from '@angular/core';
import { MdDialog, MdDialogRef } from '@angular/material';

import { DataService } from '../data.service'
import { DeleteConfirmComponent } from '../delete-confirm/delete-confirm.component'

@Component({
  selector: 'app-studentclass',
  templateUrl: './studentclass.component.html',
  styleUrls: ['./studentclass.component.css']
})
export class StudentclassComponent implements OnInit {

  errorMessage: string;
  successMessage: string;
  studentclasses: any[];
  mode = 'Observable';
 
  constructor (private dataService: DataService, public dialog: MdDialog) {}
 
  ngOnInit() { this.getStudentclasses(); }
 
  getStudentclasses() {
    this.dataService.getRecords("studentclass")
      .subscribe(
        studentclasses => this.studentclasses = studentclasses,
        error =>  this.errorMessage = <any>error);
  }

  deleteStudentclass(id:number) {

    let dialogRef = this.dialog.open(DeleteConfirmComponent);

    dialogRef.afterClosed().subscribe(result => {
      if(result){
        this.dataService.deleteRecord("studentclass", id)
          .subscribe(
            studentclass => {this.successMessage = "Record(s) deleted succesfully"; this.getStudentclasses(); },
            error =>  this.errorMessage = <any>error);
      }
    });
  }

}
