import { Component, OnInit } from '@angular/core';
//Example of reactive forms
//Import the FormGroup and FormControl classes
import { FormBuilder,FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
  //define the form group 
  myForm: FormGroup = new FormGroup({});

  //Inject the FormBuilder service
  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    //initialize the form and its controls
    this.myForm = this.formBuilder.group({
      name: '',
      lastname: '',
      email: '', 
      phone: '',
      address: ''
    });
    //now subscribe to the form value changes
    this.myForm.valueChanges.subscribe(console.log);
  }

}
