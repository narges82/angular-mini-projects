import { CommonModule, NgClass } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
})
export class SignupComponent {
  firstNameValid: boolean;
  lastNameValid: boolean;
  emailValid: boolean;
  passValid: boolean;
  birthDateValid: boolean;
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  submitStatus: number;

  constructor() {
    this.firstNameValid = false;
    this.lastNameValid = false;
    this.emailValid = false;
    this.passValid = false;
    this.birthDateValid = false;
    this.firstName = '';
    this.lastName = '';
    this.email = '';
    this.password = '';
    this.submitStatus = 0;
  }

  onSubmit() {
    this.firstNameValid = this.firstName.length !== 0;
    this.lastNameValid = this.lastName.length !== 0;
    this.emailValid =
      this.email.length !== 0 &&
      this.email.includes('@') &&
      this.email.split('@')[1].includes('.');
    this.passValid = this.password.length > 3;

    if (
      this.firstNameValid &&
      this.lastNameValid &&
      this.emailValid &&
      this.passValid
    ) {
      alert(`Welcome to my page!`);
      this.submitStatus = 1;
    } else {
      alert('Something went wrong :(');
      this.submitStatus = 2;
    }
  }
}
