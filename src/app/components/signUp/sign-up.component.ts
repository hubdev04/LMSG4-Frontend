import { JsonPipe } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { UserRegister } from '../../services/userRegister.service';
import { Router, RouterModule, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-sign-up',
  standalone: true,
  imports: [FormsModule, RouterModule, RouterOutlet],
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent {
  signUpForm: any = {
    firstName: '',
    lastName: '',
    email: '',
    mobile: '',
    password: '',
    confirmPassword: '',
    role: ''

  }

  constructor(private userRegister: UserRegister, private route: Router) { }
  onSubmit(form: NgForm) {
    if (form.invalid) {
      Object.keys(form.controls).forEach(field => {
        const control = form.control.get(field);
        control?.markAsTouched({ onlySelf: true });
      });
      return;
    }
    if (form.valid && this.signUpForm.password === this.signUpForm.confirmPassword) {
      const signUpObj = {
        firstName: this.signUpForm.firstName,
        lastName: this.signUpForm.lastName,
        email: this.signUpForm.email,
        mobile: this.signUpForm.mobile,
        password: this.signUpForm.password,
        role: this.signUpForm.role
      };
      this.userRegister.registerUser(signUpObj).subscribe({
        next: (response) => {
          if (response.success) {
            alert("Registration successful");
            this.route.navigate(['/login'])
          } else {
            console.log("hello");
            console.error(response.message);
          }
        },
        error: (err) => console.error("Error is this:", err)
      });
    }
    else if (this.signUpForm.password !== this.signUpForm.confirmPassword) {
      alert('password mismatch')

    }
    else {
      console.log(form.errors)
    }
  }



}
