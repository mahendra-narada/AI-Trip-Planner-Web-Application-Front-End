import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  constructor(private router:Router){}

  Email:string="";
  password:string="";


   async loginUser() {

    if (!this.Email || !this.password) {
      Swal.fire('Please fill in all fields!', '', 'warning');
      return;
    }

    if (!this.isValidEmail(this.Email)) {
      Swal.fire('Please enter a valid email address!', '', 'error');
      return;
    }

    try {
      const response = await fetch ('http://localhost:8080/User/login',
       { method:'POST',
        headers:{
          'Content-Type':'application/json',
        },
        body:JSON.stringify({
          userEmail:this.Email,
          userPassword:this.password
        }),
       });

       if (response.ok) {
        const data = await response.json();
         localStorage.setItem('userEmail',data.email);
         localStorage.setItem('userName',data.userName);
         localStorage.setItem('userId',data.userId);
         console.log(localStorage.getItem('userId'));
         

        Swal.fire({
          title: 'Login Successful!',
          text: 'You have successfully Login. Welcome!',
          icon: 'success',
          timer: 2000
        });
        this.router.navigate(["/"]);
       }
       else{
        Swal.fire('Invalid credentials','','error');
       }
    } catch (error) {
      Swal.fire('Invalid credentials','','error');
      
    }

    };


    
 isValidEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
} 

}
