import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import {Sort} from '@angular/material';
import {FormControl} from '@angular/forms';
import {Observable} from 'rxjs/Observable';
import {startWith} from 'rxjs/operators/startWith';
import {map} from 'rxjs/operators/map';
import {MatTableDataSource} from '@angular/material';
import {SelectionModel} from '@angular/cdk/collections';

@Component({
  selector: 'app-stepsale',
  templateUrl: './stepsale.component.html',
  styleUrls: ['./stepsale.component.css']
})
export class StepsaleComponent implements OnInit {
  proJtype = '';
  color2 = 'warn';
  value2 = 40;
  color = 'primary';
  value = 20;
  tOP = '';
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  thirdFormGroup: FormGroup;
  fouthFormGroup: FormGroup;
  fifthFormGroup: FormGroup;
  constructor(private _formBuilder: FormBuilder) { this.codeCtrl = new FormControl();
    this.filteredCodes = this.codeCtrl.valueChanges
      .pipe(
        startWith(''),
        map(codes => codes ? this.filterCodes(codes) : this.Codes.slice())
      );

    this.nameCtrl = new FormControl();
      this.filteredName = this.nameCtrl.valueChanges
        .pipe(
          startWith(''),
          map(name => name ? this.filtername(name) : this.CusName.slice())
        ); }

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
    this.fouthFormGroup = this._formBuilder.group({
      fouthCtrl: ['', Validators.required]
    });
    this.fifthFormGroup = this._formBuilder.group({
      fifthCtrl: ['', Validators.required]
    });
  }
  rows = {
    Code: Number,
    Cus_Name: String,
    Tel: Number,
    Address: String
  };
    filterCodes(arg0: any): any {
        throw new Error('Method not implemented.');
    }
    filtername(arg0: any): any {
      throw new Error('Method not implemented.');
  }

     typeOfProJ = [
    'Project Jon',
    'MASS',
    'Automobile'
  ];

  codeCtrl: FormControl;
  nameCtrl: FormControl;
  filteredCodes: Observable<any[]>;
  filteredName: Observable<any[]>;

  Codes: Code[] = [
    {
      codes: 888,
      detail: '....'
    },
    {
      codes: 889,
      detail: '....'

    },
    {
      codes: 890,
      detail: '....'

    },
    {
      codes: 420,
      detail: '....'

    }
]

CusName: cus[] = [
  {
    name: '.....'

  },
  {
    name: '....'
  },
  {
    name: '.....'

  },
  {
    name: '.....'
  }
]
  add(Code, Cus_Name, Tel, Address) {
  }

  onSave(Code, Cus_Name, Tel, Address) {
    if (Code&&Cus_Name&&Tel&Address) {
      this.rows = {
        Code: Code,
        Cus_Name: Cus_Name,
        Tel: Tel,
        Address: Address
      }
    }
  }

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
  {position: 1, name: 'สมนึก', Lname:'ดิษช่วย'},
  {position: 2, name: 'ก้องภพ', Lname: 'ลีลา' },
  {position: 3, name: 'จิณณธรรม', Lname: 'จักรวาฬ'},
  {position: 4, name: 'ศุภวิชญ์', Lname:'อุตรา' },
  {position: 5, name: 'ณิชฌาณ', Lname: 'เขื่ีอนพันธ์'},
  {position: 6, name: 'ลาภเป็ด', Lname: 'ลิเวอ'},
  {position: 7, name: 'สุดแกร่ง', Lname: 'แมนยู'}
];
export class Code {
        constructor(public codes: number, public detail: string) { }
      }
 export class cus {
        constructor(public name: string) { }
      } 
