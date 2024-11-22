import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';



@Component({
  selector: 'app-signin',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './signin.component.html',
  styleUrl: './signin.component.css'
})
export class SigninComponent {


  constructor(private router:Router) {}

  userName: string = "";
  Email: string = "";
  Password: string = "";
  


  async registerUser() {
    if (!this.userName || !this.Email || !this.Password) {
      Swal.fire('Please fill in all fields!', '', 'warning');
      return;
    }
    if (!this.isValidEmail(this.Email)) {
      Swal.fire('Please enter a valid email address!', '', 'error');
      return;
    }

    const emailExists = await this.checkEmailExists(this.Email);
    if (emailExists) {
      Swal.fire("Email already exists. Please use a different email.");
      return;
    }
  
    const user = {
      userName: this.userName,
      email: this.Email,
      password: this.Password
    };

    console.log(user);

    try {
      const response = await fetch('http://localhost:8080/User/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(user)
      });
      
      if (response.ok) {
        Swal.fire({
          title: 'Registration Successful!',
          text: 'You have successfully registered. Welcome!',
          icon: 'success',
          timer: 5000
        });
        this.router.navigate(['/login']);

      } else {
        Swal.fire('Error', 'Could not register. Please try again.', 'error');
      }
    } catch (error) {
      Swal.fire('Error', 'Something went wrong. Please try again later.', 'error');
      console.error('Error:', error);
    }
}

isValidEmail(email: string): boolean {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

  
async checkEmailExists(email: string): Promise<boolean> {
  try {
    const response = await fetch(`http://localhost:8080/User/emailCheck?email=${email}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    });
    const data = await response.json();
    return data === true;
  } catch (error) {
    console.error('Error checking email:', error);
    return false;
  }
}


}
