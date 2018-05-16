import { Component, OnInit,Inject } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
@Component({
  selector: 'app-storemat',
  templateUrl: './storemat.component.html',
  styleUrls: ['./storemat.component.css']
})
export class StorematComponent  {
  color2 = 'warn';
  value2 = 40;
  color = 'primary';
  value = 20;

  displayedColumns = ['position', 'name', 'weight', 'symbol','scope'];
  dataSource = ELEMENT_DATA;

  foods = [
    {value: 'steak-0', viewValue: 'Steak'},
    {value: 'pizza-1', viewValue: 'Pizza'},
    {value: 'tacos-2', viewValue: 'Tacos'}
  ];

  constructor(public dialog: MatDialog) {}

  openDialog() {
    this.dialog.open(DialogDataExampleDialog, {
      data: {
        animal: 'panda'
      }
    });
  }
}


export interface Element {
  name: string;
  position: number;
  weight: number;
  symbol: string;
  scope: string;
}

const ELEMENT_DATA: Element[] = [
  {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H', scope: 'h'},
  {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He', scope: 'h'},
  {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li', scope: 'h'},
  {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be', scope: 'h'},
  {position: 5, name: 'Boron', weight: 10.811, symbol: 'B', scope: 'h'},
  {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C', scope: 'h'},
  {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N', scope: 'h'},
  {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O', scope: 'h'},
  {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F', scope: 'h'},
  {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne', scope: 'h'},
  {position: 11, name: 'Sodium', weight: 22.9897, symbol: 'Na', scope: 'h'},
  {position: 12, name: 'Magnesium', weight: 24.305, symbol: 'Mg', scope: 'h'},
  {position: 13, name: 'Aluminum', weight: 26.9815, symbol: 'Al', scope: 'h'},
  {position: 14, name: 'Silicon', weight: 28.0855, symbol: 'Si', scope: 'h'},
  {position: 15, name: 'Phosphorus', weight: 30.9738, symbol: 'P', scope: 'h'},
  {position: 16, name: 'Sulfur', weight: 32.065, symbol: 'S', scope: 'h'},
  {position: 17, name: 'Chlorine', weight: 35.453, symbol: 'Cl', scope: 'h'},
  {position: 18, name: 'Argon', weight: 39.948, symbol: 'Ar', scope: 'h'},
  {position: 19, name: 'Potassium', weight: 39.0983, symbol: 'K', scope: 'h'},
  {position: 20, name: 'Calcium', weight: 40.078, symbol: 'Ca', scope: 'h'},
];
// export class DialogDataExample {
//   constructor(public dialog: MatDialog) {}

//   openDialog() {
//     this.dialog.open(DialogDataExampleDialog, {
//       data: {
//         animal: 'panda'
//       }
//     });
//   }
// }

@Component({
  selector: 'storeEdit',
  templateUrl: 'storeEdit.html',
})
export class DialogDataExampleDialog {
  constructor(@Inject(MAT_DIALOG_DATA) public data: any) {}
}