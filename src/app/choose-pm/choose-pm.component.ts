
import { Component, OnInit } from '@angular/core';
import {MatTableDataSource} from '@angular/material';
import {SelectionModel} from '@angular/cdk/collections';
@Component({
  selector: 'app-choose-pm',
  templateUrl: './choose-pm.component.html',
  styleUrls: ['./choose-pm.component.css']
})
export class ChoosePmComponent {
  displayedColumns = ['select', 'position', 'name', 'Lname'];
  dataSource = new MatTableDataSource<Element>(ELEMENT_DATA);
  selection = new SelectionModel<Element>(true, []);

  /** Whether the number of selected elements matches the total number of rows. */
  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
  }

  /** Selects all rows if they are not all selected; otherwise clear selection. */
  masterToggle() {
    this.isAllSelected() ?
        this.selection.clear() :
        this.dataSource.data.forEach(row => this.selection.select(row));
  }
}

export interface Element {
  name: string;
  position: number;
  Lname: string;
}

const ELEMENT_DATA: Element[] = [
  {position: 1, name: 'สมนึก', Lname: 'ดิษช่วย'},
  {position: 2, name: 'ก้องภพ', Lname: 'ลีลา' },
  {position: 3, name: 'จิณณธรรม', Lname: 'จักรวาฬ'},
  {position: 4, name: 'ศุภวิชญ์', Lname: 'อุตรา' },
  {position: 5, name: 'ณิชฌาณ', Lname: 'เขื่ีอนพันธ์'},
  {position: 6, name: 'ลาภเป็ด', Lname: 'ลิเวอ'},
  {position: 7, name: 'สุดแกร่ง', Lname: 'แมนยู'}
];
