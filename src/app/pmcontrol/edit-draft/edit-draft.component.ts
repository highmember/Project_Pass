import { Component, OnInit,Inject } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {FormControl} from '@angular/forms';
import { MatDialog } from '@angular/material';
import { reportdiComponent } from './reportdi';
@Component({
  selector: 'app-edit-draft',
  templateUrl: './edit-draft.component.html',
  styleUrls: ['./edit-draft.component.css']
})

export class EditDraftComponent implements OnInit {
  
  draftname: String; 
  nameOfdraft = ['Mr....... ........', 
                 'Mr....... ........',
                 'Mr....... ........',
                 'Mr....... ........',
                 'Mr....... ........' ];


  constructor(private _formBuilder: FormBuilder,private dialog: MatDialog,) { }
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  thirdFormGroup: FormGroup;

  openDialog(): void {
    const dialogRef = this.dialog.open(reportdiComponent, {
       width: '750px',
      data: {
      }
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result !== undefined) {   
                                                
      }
    });
  }
  ngOnInit() {
    this.firstFormGroup = this._formBuilder.group({
      firstCtrl: ['', Validators.required]
    });
    this.secondFormGroup = this._formBuilder.group({
      secondCtrl: ['', Validators.required]
    });
    this.thirdFormGroup = this._formBuilder.group({
      thirdCtrl: ['', Validators.required]
    });
  }

}
