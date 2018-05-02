import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { FormBuilder, FormGroup,Validators } from '@angular/forms';

@Component({
  selector: 'app-sale-dialog',
  templateUrl: './sale-dialog.component.html'
})

/**
 * manage about degree dialog insert, edit, delete data
 */
export class SaleDialogComponent implements OnInit {
  isLinear = false;
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  proJtype: string;

  typeOfProJ = [
    'Project Jon',
    'MASS',
    'Automobile'
  ];
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private dialogRef: MatDialogRef<SaleDialogComponent>,private _formBuilder: FormBuilder
  ) { }
  /**
   * create from group and set data of degree
  */
  ngOnInit() {
    
    this.firstFormGroup = this._formBuilder.group({
      firstCtrl: ['', Validators.required]
    });
    this.secondFormGroup = this._formBuilder.group({
      secondCtrl: ['', Validators.required]
    });
  }
  /**
   * set value in close() for return
   */
  onClose() {
    this.dialogRef.close(/*sent value to tab-supervision*/);
  }
  /**
   * save value in variable and return
   */
  onSave() {
    const value = '2';
    this.dialogRef.close(value);
  }

}
