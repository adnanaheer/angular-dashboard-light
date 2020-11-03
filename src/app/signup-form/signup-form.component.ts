import { Component, OnInit } from '@angular/core';
import { FormControl, Validators,FormGroup,FormBuilder } from '@angular/forms';


@Component({
  selector: 'app-signup-form',
  templateUrl: './signup-form.component.html',
  styleUrls: ['./signup-form.component.scss']
})

export class SignupFormComponent implements OnInit {
  hide = true;

  SignupForm: FormGroup;

  constructor(private fb: FormBuilder) {

    this.SignupForm= this.fb.group({
      firstname: ['', Validators.required],
      lastname: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', Validators.required],
      gender:['', Validators.required]

    });


  }
  Gender: string[] = ['Male', 'Female', 'Other'];

  ngOnInit(): void {
  }

  myFilter = (d: Date | null): boolean => {
    const day = (d || new Date()).getDay();
    // Prevent Saturday and Sunday from being selected.
    return day !== 0 && day !== 6;
  }

  onSubmit() {
     var res=this.SignupForm.value;
     console.log(res);
     alert(res);
  }

}
