import {Observable} from 'rxjs/Observable';
import {startWith} from 'rxjs/operators/startWith';
import {map} from 'rxjs/operators/map';
import {FormControl} from '@angular/forms';
import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-stepsale2',
  templateUrl: './stepsale2.component.html',
  styleUrls: ['./stepsale.component.css']
})

export class Stepsale2Component implements OnInit {
  rows = {
    Code: Number,
    Cus_Name: String,
    Tel: Number,
    Address: String
  }
    filterCodes(arg0: any): any {
        throw new Error("Method not implemented.");
    }
    filtername(arg0: any): any {
      throw new Error("Method not implemented.");
  }
  proJtype: string;

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
  constructor( ) { 
    this.codeCtrl = new FormControl();
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
        ); 
      
  }
//   filterStates(name: string) {
//         return this.states.filter(state =>
//           state.name.toLowerCase().indexOf(name.toLowerCase()) === 0);
//       }


  ngOnInit() {

  }
  
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
}


export class Code {
    constructor(public codes: number, public detail: string) { }
  }
  export class cus {
    constructor(public name: string) { }
  }
