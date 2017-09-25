import { Component, OnInit,Input } from '@angular/core';
import { MdDialog, MdDialogRef } from '@angular/material';

import { DataService } from '../data.service'
import { DeleteConfirmComponent } from '../delete-confirm/delete-confirm.component'

@Component({
  selector: 'app-majorclass',
  templateUrl: './majorclass.component.html',
  styleUrls: ['./majorclass.component.css']
})
export class MajorclassComponent implements OnInit {
  
  errorMessage: string;
  successMessage: string;
  majorclasses: any[];
  mode = 'Observable';
 
  constructor (private dataService: DataService, public dialog: MdDialog) {}
 
  ngOnInit() { this.getMajorclasses(); }
 
  getMajorclasses() {
    this.dataService.getRecords("majorclass")
      .subscribe(
        majorclasses => this.majorclasses = majorclasses,
        error =>  this.errorMessage = <any>error);
  }

  deleteMajorclass(id:number) {

    let dialogRef = this.dialog.open(DeleteConfirmComponent);

    dialogRef.afterClosed().subscribe(result => {
      if(result){
        this.dataService.deleteRecord("majorclass", id)
          .subscribe(
            majorclass => {this.successMessage = "Record(s) deleted succesfully"; this.getMajorclasses(); },
            error =>  this.errorMessage = <any>error);
      }
    });
  }

}
