import { Component } from '@angular/core';
import { NgForm } from '@angular/forms'; // Import NgForm
import { FormsModule } from '@angular/forms';  // Import FormsModule
import { UserLogging } from '../../services/userLogin.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  logInForm: any ={
  email : '',
  password : '',
  role:','
  }
  constructor(private userLogging: UserLogging,private router:Router) {}
  onSubmit(form :NgForm){
    if (form.invalid) {
      Object.keys(form.controls).forEach(field => {
        const control = form.control.get(field);
        control?.markAsTouched({ onlySelf: true });
      });
      return;
    }
    if(form.valid){
      this.userLogging.loginUser(this.logInForm).subscribe({
        next: (response) => {
          if (response.success) {

            alert('Login successful');
            localStorage.setItem('authorization', `Bearer ${response.result}`);
            console.log(response.result);
            const role = this.logInForm.role; // Assuming the role is part of the result
            if (role === 'mentor') {
              this.router.navigate(['/mentor-dashboard']); // Navigate to mentor dashboard
            } else {
              this.router.navigate(['/home']); // Navigate to homepage
            }
            // Handle successful login (e.g., redirect to dashboard)
          } else {
            console.error('Server responded with an error:', response.message);
            // Handle login failure
          }
        },
        error: (err) => {
          alert(err.error.message)
          console.error('Error occurred:', err);
          // Handle network or other errors
        }
      });
    }
    else{
      console.log(form.errors)
    }
  }
}
