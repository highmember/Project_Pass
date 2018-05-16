import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { StorematDialogComponent } from './store-dialog.component';
import { FormControl } from '@angular/forms';


@Component({
  selector: 'app-store',
  styleUrls: ['store.component.css'],
  templateUrl: 'store.component.html',
})

export class StoreComponent implements OnInit{
  constructor(
    private dialog: MatDialog,
  ) { }
  ngOnInit() {
  }
  displayedColumns = ['projectno', 'name', 'materialid', 'amount','stock','editmat'];
  dataSource = ELEMENT_DATA;
  

  color2 = 'warn';
  value2 = 40;
  color = 'primary';
  value = 20;

  startDate = new Date(1990, 0, 1);
  openDialog(): void {
    const dialogRef = this.dialog.open(StorematDialogComponent, {
       width: '750px',
      data: {
      }
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result !== undefined) {   
                                                
      }
    });
  }
}

export interface Element {
  name: string;
  projectno: string;
  materialid: string;
  editmat: string;
  amount: number;
  stock: number;
  
}





const ELEMENT_DATA: Element[] = [
  {projectno:'888001',materialid: '005', name: 'ไม้กระดาน', amount: 30, stock: 100,editmat:''},
  {projectno:'888001',materialid: '235', name: 'เหล็กเส้น', amount: 50, stock: 30,editmat:''},
  {projectno:'888001',materialid: '054', name: 'ปูน', amount: 75, stock: 100,editmat:''},
  {projectno:'888001',materialid: '082', name: 'สีแดง', amount: 10, stock: 0,editmat:''},
  {projectno:'888001',materialid: '123', name: 'ทินเนอร์', amount: 20, stock: 60,editmat:''},
  {projectno:'888001',materialid: '145', name: 'ยาง', amount: 45, stock: 100,editmat:''},
  {projectno:'888002',materialid: '005', name: 'ไม้กระดาน', amount: 20, stock: 100,editmat:''},
  {projectno:'888002',materialid: '105', name: 'ไม้อัด', amount: 25, stock: 60,editmat:''},
  {projectno:'888002',materialid: '010', name: 'เหล็กแผ่น', amount: 20, stock: 100,editmat:''},
  {projectno:'888002',materialid: '065', name: 'กระจกแผ่นเล็ก', amount: 20, stock: 60,editmat:''},
  {projectno:'888002',materialid: '054', name: 'ปูน', amount: 15, stock: 100,editmat:''},
  {projectno:'888002',materialid: '044', name: 'สังกะสี', amount: 20, stock: 60,editmat:''},
  {projectno:'888002',materialid: '088', name: 'กระเบื้องหนา', amount: 30, stock: 200,editmat:''},
  {projectno:'888003',materialid: '005', name: 'ไม้กระดาน', amount: 28.0855, stock: 100,editmat:''},
  {projectno:'888003',materialid: '123', name: 'ทินเนอร์', amount: 30, stock: 60,editmat:''},
  {projectno:'888003',materialid: '088', name: 'กระเบื้องหนา', amount: 35, stock: 200,editmat:''},
  {projectno:'888003',materialid: '235', name: 'เหล็กเส้น', amount: 100, stock: 30,editmat:''},
  {projectno:'888003',materialid: '002', name: 'กระเบื้องบาง', amount: 50, stock: 200,editmat:''},
  {projectno:'888004',materialid: '005', name: 'ไม้กระดาน', amount: 10, stock: 100,editmat:''},
  {projectno:'888004',materialid: '054', name: 'ปูน', amount: 40, stock: 100,editmat:''},
];

