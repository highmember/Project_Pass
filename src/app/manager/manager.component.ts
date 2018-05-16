import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-manager',
  templateUrl: './manager.component.html',
  styleUrls: ['./manager.component.css']
})
export class ManagerComponent implements OnInit {
  files: any[];

  constructor() { }

  ngOnInit() {
    this.files = [{
      name: 'aaa',
      amount: 100,
      workamount:0
    },
    {
      name: 'bbb',
      amount: 100,
      workamount:0
    }
  ]
    
  }
  add(workamount){}

  onSave(workamount,index){
    console.log(index)
    // this.files[index].workamount = workamount ;
  }

}
