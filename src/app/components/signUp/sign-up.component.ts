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
  }
  
  onSubmit(form :NgForm){
    if(form.valid &&  this.signUpForm.password===this.signUpForm.confirmPassword){
      alert("success");
      return;
    }
    else if(!form.valid){
      console.log(form.errors)
    }
  }
  

  
}
