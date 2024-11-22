import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-viewtrip',
  standalone: true,
  imports: [FormsModule,NgFor],
  templateUrl: './viewtrip.component.html',
  styleUrl: './viewtrip.component.css'
})
export class ViewtripComponent {
  selectedLocation: any;
  travelers: any;
  startDate: any;
  endDate: any;
  budget: any;
  tripPlan: any;
  guides:any;
  tripDetails: any;
  

  constructor(private route: ActivatedRoute) {
    this.route.queryParams.subscribe(params => {
      this.tripDetails = params;
      console.log(this.tripDetails.guideId);
      this.fetchGuide(this.tripDetails.guideId);
      
    });
  }
  sendData() {
    
  }

  async fetchGuide(guideId:Number){
    try {
      const response = await fetch (`http://localhost:8080/Guide/byId?guideId=${guideId}`);
      const data = await response.json();
      console.log(data);
      this.guides=data;
      
    } catch (error) {
     console.log(error);
     
    }
  }

}
