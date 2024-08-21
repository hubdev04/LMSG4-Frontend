import { Component } from '@angular/core';
import { NgForm } from '@angular/forms'; // Import NgForm
import { FormsModule } from '@angular/forms';  // Import FormsModule
import { UserLogging } from '../../services/userLogin.service';
import { ActivatedRoute, NavigationEnd, Router, RouterLink, RouterModule, RouterOutlet } from '@angular/router';
import { filter } from 'rxjs/operators';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule,CommonModule,RouterModule,RouterOutlet],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  currentUrl: string ='';
  logInForm: any ={
  email : '',
  password : '',
  role:'',
  }
  constructor(private userLogging: UserLogging,private router:Router) {}
  ngOnInit(): void {
    // Get route parameters
   
    
      this.currentUrl = this.router.url;
      console.log('Current URL:', this.currentUrl);
   
}
  onSubmit(form :NgForm){
    if (form.invalid) {
      Object.keys(form.controls).forEach(field => {
        const control = form.control.get(field);
        control?.markAsTouched({ onlySelf: true });
      });
      return;
    }
    if(form.valid){
      if(this.currentUrl==="/login"){
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
        this.logInForm.role='ADMIN'
        this.userLogging.loginUser(this.logInForm).subscribe({
          next: (response) => {
            if (response.success) {
  
              alert('Login successful');
              localStorage.setItem('authorization', `Bearer ${response.result}`);
              console.log(response.result);
             
      
              this.router.navigate(['/adminDashboard']); // Navigate to homepage
              
              // Handle successful login (e.g., redirect to dashboard)
            } else {
              console.error('Server responded with an error:', response.message);
              // Handle login failure
            }
          },
          error: (err) => {
            alert("Invalid Credentials")
            console.error('Error occurred:', err);
            // Handle network or other errors
          }
        });
      }
    }
    else{
      console.log(form.errors)
    }
  }
 
}