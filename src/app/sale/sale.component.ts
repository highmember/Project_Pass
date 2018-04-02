import { Component, OnInit } from '@angular/core';

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
  constructor() { }

  ngOnInit() {
  }

}