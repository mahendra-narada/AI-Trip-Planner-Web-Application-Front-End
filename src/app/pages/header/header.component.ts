import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [NgIf],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

  logout() {
    localStorage.removeItem('userEmail');
    Swal.fire({
      title: 'LogOut!',
      text: '',
      icon: 'success',
      timer: 2000
    });

}
islogIn():boolean {
 const userEmail =  localStorage.getItem('userEmail');
 return userEmail!==null && userEmail !=='';
}
    
}
