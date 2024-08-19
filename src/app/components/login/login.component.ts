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

  logInForm: any ={
  email : '',
  password : '',
  }
  
  onSubmit(form :NgForm){
    if(form.valid && this.logInForm.password==="1234" ){
      alert("success");
      return;
    }
    else if(!form.valid){
      console.log(form.errors)
    }
  }
}
