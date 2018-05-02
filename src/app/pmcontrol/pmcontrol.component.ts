import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { PmmatDialogComponent } from './pmcontrol-dialog.component';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-pmcontrol',
  templateUrl: './pmcontrol.component.html',
  styleUrls: ['./pmcontrol.component.css']
})
export class PmcontrolComponent implements OnInit {

  constructor(
    private dialog: MatDialog,
  ) { }

  ngOnInit() {
  }

  color2 = 'warn';
  value2 = 40;
  color = 'primary';
  value = 20;

  startDate = new Date(1990, 0, 1);
  openDialog(): void {
    const dialogRef = this.dialog.open(PmmatDialogComponent, {
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
