import { Component } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-trip-plan',
  standalone: true,
  imports: [],
  templateUrl: './trip-plan.component.html',
  styleUrl: './trip-plan.component.css'
})
export class TripPlanComponent {

  constructor(private router: Router) {}

  plantrip(): void {
    const userEmail = localStorage.getItem('userEmail');
    if (userEmail!==null && userEmail!=='') {
      this.router.navigate(['/Plan']);
    }
    else{
      Swal.fire('Login in to Site Before Plan the trip','','error');
    }
   
  }
}
