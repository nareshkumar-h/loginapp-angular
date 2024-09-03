import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  constructor(private router: Router) {
    console.log('LoginComponent constructor called');

  }
  email: string = 'abc@gmail.com';
  password!: string;

  onSubmit() {
    // alert('Form is submitted');

    // //How to get form values in angular
    // alert('Email:' + this.email);
    // alert('Password:' + this.password);

    //Convert form values to json data
    const userData = {
      "email": this.email,
      "password": this.password
    };

    // Login Details: admin@gmail.com/admin
    if (this.email == "admin@gmail.com" && this.password == "admin") {
      alert("Login Successful");
      localStorage.setItem("LOGGED_IN", "true");
      // window.location.href = "/products"; //Page redirection ( html/JS)
      this.router.navigateByUrl('/products'); // recommended - SPA
    } else {
      alert("Invalid Login Credentials");
    }

    //debug
    console.log(userData);
  }
}
