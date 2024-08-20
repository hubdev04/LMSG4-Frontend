import { JsonPipe } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-sign-up',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent {
  signUpForm: any ={
    firstName : '',
  lastName : '',
  email : '',
  phoneNumber : '',
  password : '',
  confirmPassword : '',
  role: '',
  }
  
  onSubmit(form :NgForm){
    if (form.invalid) {
      Object.keys(form.controls).forEach(field => {
        const control = form.control.get(field);
        control?.markAsTouched({ onlySelf: true });
      });
      return;
    }
    if(form.valid &&  this.signUpForm.password===this.signUpForm.confirmPassword){
      alert("success");
      return;
    }
    else {
      console.log(form.errors)
    }
  }
  

  
}
