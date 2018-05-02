import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-stepsale',
  templateUrl: './stepsale.component.html',
  styleUrls: ['./stepsale.component.css']
})
export class StepsaleComponent implements OnInit {
  proJtype: string;

  typeOfProJ = [
    'Project Jon',
    'MASS',
    'Automobile'
  ];
  
  constructor() { }

  ngOnInit() {
  }

}
