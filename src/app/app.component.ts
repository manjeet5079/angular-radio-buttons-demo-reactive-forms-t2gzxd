import { Component } from '@angular/core';
import { FormBuilder, Validators } from "@angular/forms";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  isSubmitted = false;

  constructor(public fb: FormBuilder) { }

  /*########### Form ###########*/
  registrationForm = this.fb.group({
    gender: ['male', [Validators.required]]
  })

  // Getter method to access form control
  get myForm() {
    return this.registrationForm.get('gender');
  }

  // Submit Registration Form
  onSubmit() {
    this.isSubmitted = true;
    if(!this.registrationForm.valid) {
      return false;
    } else {
      alert(JSON.stringify(this.registrationForm.value))
    }
  }  

}