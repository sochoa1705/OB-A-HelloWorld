import { Component, OnInit } from '@angular/core';
//Import the FormGroup and FormControl classes
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-form-valid',
  templateUrl: './form-valid.component.html',
  styleUrls: ['./form-valid.component.scss']
})
export class FormValidComponent implements OnInit {
  //Declare the form group
  validForm: FormGroup = new FormGroup({});

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    //Initialize the form group
    this.validForm = this.fb.group({
      //Initialize the form control
      name: ['', Validators.required],
      lastname: '',
      age: ['', [Validators.compose([Validators.required, Validators.min(18), Validators.max(99)])]],
      email: ['', [Validators.compose([Validators.required, Validators.email])]],
      password: ['', [Validators.compose([Validators.required, Validators.pattern('[a-zA-z]*'),Validators.minLength(8)])]],
      confirmPassword: [false, Validators.requiredTrue]
    })
  }

  //Getters for the form controls
  get name() { return this.validForm.get('name'); }
  get lastname() { return this.validForm.get('lastname'); }
  get age() { return this.validForm.get('age'); }
  get email() { return this.validForm.get('email'); }
  get password() { return this.validForm.get('password'); }
  get confirmPassword() { return this.validForm.get('confirmPassword'); }

  //Submit the form
  submitForm() {
    if (this.validForm.valid) {
      console.log(this.validForm.value);
      //Reset the form
      this.validForm.reset();
    }
  }

}

