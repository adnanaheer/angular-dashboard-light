import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { NewChartComponent } from '../new-chart/new-chart.component';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent implements OnInit {



  fileNameDialogRef: MatDialogRef<NewChartComponent>;

  hide = true

  constructor(public dialog: MatDialog) { }

  LoginForm = new FormGroup({
    email: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required])
  });

  openDialog() {
    this.fileNameDialogRef = this.dialog.open(NewChartComponent);
  }

  ngOnInit(): void {
  }

  onSubmit() {

  }

}