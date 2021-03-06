import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { FormBuilder, FormGroup } from '@angular/forms';
@Component({
  selector: 'app-pmcontrol-dialog',
  templateUrl: './pmcontrol-dialog.component.html'
})

/**
 * manage about degree dialog insert, edit, delete data
 */
export class PmmatDialogComponent implements OnInit {
  /**
   *  variable 'form' use FormGroup for manage form
  */

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private dialogRef: MatDialogRef<PmmatDialogComponent>,
  ) { }
  /**
   * create from group and set data of degree
  */
  ngOnInit() {
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
