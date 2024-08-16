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
  firstName: string = '';
  lastName: string = '';
  email: string = '';
  phoneNumber: string = '';
  password: string = '';
  confirmPassword: string = '';

  onSubmit(form: NgForm) {
    if(!form.valid){
      alert('fill the form');
      return;
    }
    else if (this.password !== this.confirmPassword) {
      alert('Passwords do not match.');
      return;
    }
    else{console.log('Form submitted:', form.value);
    alert('Signup successful!');}
    // Handle the signup logic
   
  }
}
