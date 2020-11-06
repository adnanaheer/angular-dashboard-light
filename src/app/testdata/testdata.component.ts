import { Component, OnInit } from '@angular/core';
import { DataComponent } from '../data/data.component'
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-testdata',
  templateUrl: './testdata.component.html',
  styleUrls: ['./testdata.component.scss']
})
export class TestdataComponent implements OnInit {
files=[
];

  DataComponent: MatDialogRef<DataComponent, any>;

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  openFileDialog(file?) {
    this.DataComponent = this.dialog.open(DataComponent, {
      hasBackdrop: false,
      data: {
        filename: file
      }
    });
    this.DataComponent.afterClosed().subscribe(result => {
    console.log("result", result);
    if(result){
      this.files.push(result);
    }
    console.log("files", this.files)
    });
  }
}

