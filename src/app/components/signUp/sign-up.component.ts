import { JsonPipe } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { UserRegister } from '../../services/userRegister.service';
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
 // role: '',
  }
  constructor(private userRegister: UserRegister) {}
  onSubmit(form :NgForm){
    if (form.invalid) {
      Object.keys(form.controls).forEach(field => {
        const control = form.control.get(field);
        control?.markAsTouched({ onlySelf: true });
      });
      return;
    }
    if(form.valid &&  this.signUpForm.password===this.signUpForm.confirmPassword){
      this.userRegister.registerUser(this.signUpForm).subscribe({
        next: (response) => {
          if (response.success) {
            alert("Registration successful");
          } else {
            console.error(response.message);
          }
        },
        error: (err) => console.error("Error:", err)
      });
    }
    else {
      console.log(form.errors)
    }
  }
  

  
}
