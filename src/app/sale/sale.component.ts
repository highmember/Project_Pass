import { Component, OnInit } from '@angular/core';
import {FormControl} from '@angular/forms';

@Component({
  selector: 'app-sale',
  templateUrl: './sale.component.html',
  styleUrls: ['./sale.component.css']
})
export class SaleComponent implements OnInit {
  PM: string;

  ProjectManeger = [
    'MR.Wichat Jakawan',
    'MR.AAAAA AAAAAA',
    'MR.BBBBB BBBBBB',
    'MR.CCCCC CCCCCC',
  ];
  namePM = [
    {
      name: 'MR.Wichat Jakawan',
      updated: new Date('1/1/16'),
    },
    {
      name: 'MR.AAAAAA AAAAAA',
      updated: new Date('1/17/16'),
    },
    {
      name: 'MR.BBBBB BBBBB',
      updated: new Date('1/28/16'),
    }
  ];
  color2 ='warn';
  value2 = 40;
  color = 'primary';
  value = 20;
  
  
  startDate = new Date(1990, 0, 1);
  constructor() { }

  ngOnInit() {
  }

}

 