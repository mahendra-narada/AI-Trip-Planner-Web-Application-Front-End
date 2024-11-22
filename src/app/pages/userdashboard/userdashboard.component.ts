import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { MyTripsComponent } from "../my-trips/my-trips.component";
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-userdashboard',
  standalone: true,
  imports: [MyTripsComponent,NgFor],
  templateUrl: './userdashboard.component.html',
  styleUrl: './userdashboard.component.css'
})
export class UserdashboardComponent implements OnInit{


  constructor(private router:Router){}

  public tripList:any=[];

 becomeGuide() {
  this.router.navigate(["/BecomeGuide"])

}
  
  userName:string="";
  userId:string='';

  ngOnInit(){
    console.log(localStorage.getItem("userEmail"));
    console.log(localStorage.getItem("userName"));
    this.userName=localStorage.getItem("userName")||'';
    console.log(localStorage.length);
    this.userId=localStorage.getItem('userId')||'';
    console.log(localStorage.getItem('userId'));
    this.loadTrips();
  }

  logout() {
      localStorage.removeItem('userEmail');
      Swal.fire({
        title: 'LogOut!',
        text: '',
        icon: 'success',
        timer: 2000
      });
  
  
  }

  async loadTrips() {
    let response = await fetch(`http://localhost:8080/Trip/getById?id=${this.userId}`);
    let data = await response.json();
    this.tripList=data;
    console.log(this.tripList);  
  }

  
}
