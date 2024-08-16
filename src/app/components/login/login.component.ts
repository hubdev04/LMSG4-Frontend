import { Component } from '@angular/core';
import { NgForm } from '@angular/forms'; // Import NgForm
import { FormsModule } from '@angular/forms';  // Import FormsModule

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  email: string = '';
  password: string = '';

  onSubmit(form: NgForm) {
    if (form.valid) {
      // Handle login logic here
      console.log('Form submitted:', form.value);
      alert('Login successful!');
    } else {
      alert('Please fill out the form correctly.');
    }
  }
}
