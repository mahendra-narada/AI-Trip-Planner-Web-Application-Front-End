import { NgClass, NgFor } from '@angular/common';
import { Component, Input, OnInit, SimpleChanges } from '@angular/core';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-guides',
  standalone: true,
  imports: [NgFor,NgClass],
  templateUrl: './guides.component.html',
  styleUrl: './guides.component.css'
})
export class GuidesComponent implements OnInit {
  
  
  ngOnInit(): void {
    //this.fetchGuides();
  }
  
  @Input() location:string='';
  @Input() public guideinfo:any;
  @Input() tripDate: string = '';
  @Input() endTripDate:string='';
  @Input() noOftravelers:Number=0;
  @Input() budget:Number=0;
  @Input() tripPlan:string='';

  
  isbooked:boolean=false;

  guide_name: string='';
  expirence:string='';
  imageUrl: string = '';
  //budget:Number=0;
  contact_number:string='';
  email:string='';

  guides:any[]=[];


  // async fetchGuides() {
  //   if (!this.location) {
  //     console.warn('Location is not set');
  //     return;
  //   }
  
  //   try {
  //     const response = await fetch(`http://localhost:8080/Guide/byLocation?location=${this.location}`);
  //     const data = await response.json();
  //     console.log(data)
  //     this.guides=data;
  //    // console.log(data.email);
      
  //     if (data) {
  //       for (let index = 0; index < data.length; index++) {
  //         this.guide_name = data[index].fullName || 'N/A';
  //         console.log(this.guide_name);
  //         this.expirence = data[index].experience.toString() || 'N/A';
  //         console.log(this.expirence);
  //         this.imageUrl = `data:image/jpeg;base64,${data[index].image}`;
  //         this.budget=data[index].budget;
  //         console.log(this.budget);
  //         this.contact_number=data[index].contactNumber;
  //         this.email=data[index].email;
          
  //       }
       
  //     } else {
  //       console.warn('No data returned for the given location');
  //     }
  //   } catch (error) {
  //     console.error('Error fetching guides:', error);
  //   }
  // }
  


 async bookGuide(id:string){
      console.log(id);
      console.log(localStorage.getItem('userId'));
      console.log(this.tripDate);
      

      try {
        const response = await fetch("http://localhost:8080/Booking/add",{
          method:'POST',
          headers:{
            'Content-Type':'application/json'
          },
          body:JSON.stringify({
            guideId:id,
            travelerId:localStorage.getItem('userId'),
            tripDate:this.tripDate
          }),
        });
        if (response.ok) {
          Swal.fire({
            title: 'Successful!',
            text: 'You have successfully Booked The guide. Welcome!',
            icon: 'success',
            timer: 2000
          });
          this.addTriptoList(id);
          this.isbooked=true;
        }
      } catch (error) {
        console.log(error);
        
      }
     
      
      
  }


  async addTriptoList(id:string) {
    try {
      const responce = await fetch("http://localhost:8080/Trip/add",{
        method:'POST',
        headers:{
          'Content-Type':'application/json'
        },
        body:JSON.stringify({
          userId:localStorage.getItem('userId'),
          guideId:id,
          location:this.location,
          startDate:this.tripDate,
          endDate:this.endTripDate,
          travelers:this.noOftravelers,
          budget:this.budget,
          tripPlan:this.tripPlan
        }),
      });
      if (responce.ok) {
        console.log("trip add");
        
      }
      
    } catch (error) {
      console.log(error);
      ;
    }
  } 





}
