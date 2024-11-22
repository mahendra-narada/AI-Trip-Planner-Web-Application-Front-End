import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-my-trips',
  standalone: true,
  imports: [],
  templateUrl: './my-trips.component.html',
  styleUrl: './my-trips.component.css'
})
export class MyTripsComponent {

  constructor(private router:Router) {}

  Location:string='';
  Date:string='';
  budget:Number=0;
  @Input() tripInfo:any;

  

  viewDetails() {
    this.router.navigate(['/MyTrips'],{ queryParams: this.tripInfo})
  }
}
