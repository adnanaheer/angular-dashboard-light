import { Component, OnInit,Inject } from '@angular/core';
import { FormBuilder,FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styleUrls: ['./data.component.scss']
})
export class DataComponent implements OnInit {
  form: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private dialogRef: MatDialogRef<DataComponent>,
    @Inject(MAT_DIALOG_DATA) private data
  ) {}

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      filename: this.data.filename || ''
    })
  }
  submit(form) {
    this.dialogRef.close(`${form.value.filename}`);
  }
}
