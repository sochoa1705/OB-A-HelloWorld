import { Component, OnInit } from '@angular/core';
//import from reactive forms to create a nestedform
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-nested',
  templateUrl: './form-nested.component.html',
  styleUrls: ['./form-nested.component.scss']
})
export class FormNestedComponent implements OnInit {
  //define the form group
  myNestedForm: FormGroup = new FormGroup({});

  //Inject the FormBuilder service
  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    //initialize the form and its controls
    const street = this.formBuilder.group({
      addressStreet: '',
      line: ''
    })
    const city = this.formBuilder.group({
      addressCity: '',
      zip: ''
    })
    this.myNestedForm = this.formBuilder.group({
      street: street,
      city: city
    });
    //now subscribe to the form value changes
    this.myNestedForm.valueChanges.subscribe(console.log);
  }

}

