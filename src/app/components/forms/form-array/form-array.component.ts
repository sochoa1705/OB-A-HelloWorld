import { Component, OnInit } from '@angular/core';
//import from reactive forms to create an array form
import { FormBuilder, FormGroup, FormArray,FormControl, Validators } from '@angular/forms';
@Component({
  selector: 'app-form-array',
  templateUrl: './form-array.component.html',
  styleUrls: ['./form-array.component.scss']
})
export class FormArrayComponent implements OnInit {
  //define the form group
  myArrayForm: FormGroup = new FormGroup({});
  //Inject the FormBuilder service
  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    //initialize the form and its controls
    this.myArrayForm = this.formBuilder.group({
      //define the array of form controls
      name: '',
      lastname: '',
      myArrayPhone: this.formBuilder.array([]) //Initialize the array
    });

    //now subscribe to the form value changes
    this.myArrayForm.valueChanges.subscribe(console.log);
  }

  //Getter to get the form array
  get myArrayFormPhone(): FormArray {
    return this.myArrayForm.get('myArrayPhone') as FormArray;
  }

  //Add a new phone number to the array
  addPhone() {
    //create a new form group
    const phoneGroup = this.formBuilder.group({
      prefix: '',
      number: ''
    });
    //Add the form group to the array
    this.myArrayFormPhone.push(phoneGroup);
  }
  //MEthod to remove a phone number from the array
  removePhone(i: number) {
    this.myArrayFormPhone.removeAt(i);
  }
}
