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

  constructor(public dialog: MatDialog) {}

  openDialog() {
    this.dialog.open(DialogDataExampleDialog, {
    });
  }
  openDialog2() {
    this.dialog.open(DialogStock, {
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
  {position: 1, name: 'นก', weight: 20, symbol: 'H', scope: 'h'},
  {position: 2, name: 'นก', weight: 45, symbol: 'He', scope: 'h'},
  {position: 3, name: 'นก', weight: 32, symbol: 'Li', scope: 'h'},
  {position: 4, name: 'นก', weight: 9, symbol: 'Be', scope: 'h'},
  {position: 5, name: 'นก', weight: 10, symbol: 'B', scope: 'h'},
  {position: 6, name: 'นก', weight: 12, symbol: 'C', scope: 'h'},
  {position: 7, name: 'นก', weight: 14, symbol: 'N', scope: 'h'},
  {position: 8, name: 'นก', weight: 15, symbol: 'O', scope: 'h'},
  {position: 9, name: 'นก', weight: 18, symbol: 'F', scope: 'h'},
  {position: 10, name: 'นก', weight: 20, symbol: 'Ne', scope: 'h'},
  {position: 11, name: 'นก', weight: 22, symbol: 'Na', scope: 'h'},
  {position: 12, name: 'นก', weight: 24, symbol: 'Mg', scope: 'h'},
  {position: 13, name: 'นก', weight: 26, symbol: 'Al', scope: 'h'},
  {position: 14, name: 'นก', weight: 28, symbol: 'Si', scope: 'h'},
  {position: 15, name: 'นก', weight: 30., symbol: 'P', scope: 'h'},
  {position: 16, name: 'นก', weight: 32, symbol: 'S', scope: 'h'},
  {position: 17, name: 'นก', weight: 35, symbol: 'Cl', scope: 'h'},
  {position: 18, name: 'นก', weight: 39, symbol: 'Ar', scope: 'h'},
  {position: 19, name: 'นก', weight: 39, symbol: 'K', scope: 'h'},
  {position: 20, name: 'นก', weight: 40, symbol: 'Ca', scope: 'h'},
];


@Component({
  selector: 'storeEdit',
  templateUrl: 'storeEdit.html',
})
export class DialogDataExampleDialog {
  constructor(@Inject(MAT_DIALOG_DATA) public data: any) {}
}
@Component({
  selector: 'stock',
  templateUrl: 'stock.html',
})
export class DialogStock {
  constructor(@Inject(MAT_DIALOG_DATA) public data: any) {}
}
