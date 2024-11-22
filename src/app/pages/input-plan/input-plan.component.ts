import { Component, inject, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { GeminiService } from '../../gemini.service';
import { NgFor, NgIf } from '@angular/common';
import { GuidesComponent } from "../guides/guides.component";
import Swal from 'sweetalert2';


@Component({
  selector: 'app-input-plan',
  standalone: true,
  imports: [FormsModule, NgIf, GuidesComponent,NgFor],
  templateUrl: './input-plan.component.html',
  styleUrl: './input-plan.component.css'
})
export class InputPlanComponent implements OnInit{
  
  
  ngOnInit() {
    this.getAll_Locations();
  }

  selectedLocation: string = '';
  travelers: number = 1;
  startDate: string = '';
  endDate: string = '';
  tripType: string = '';
  budget: number = 0;
  accommodation: string = '';
  activities: string = '';
  transportation: string = '';
  mealPreferences: string = '';
  specialRequirements: string = '';
  tripPace: string = '';

  locations:any[]=[];

  prompt: string = '';
  tripPlan: string = ''; 
  isLoading: boolean = false;
  showGuide:boolean=false;
  guides:any[]=[];

  geminiService:GeminiService = inject(GeminiService);


  createPrompt(): void {
    this.prompt = `
      Plan a trip to ${this.selectedLocation}.
      Number of Travelers: ${this.travelers}.
      Dates: ${this.startDate} to ${this.endDate}.
      Trip Type: ${this.tripType}.
      Budget: ${this.budget} USD.
      Accommodation Preference: ${this.accommodation}.
      Preferred Activities: ${this.activities}.
      Transportation Mode: ${this.transportation}.
      Meal Preferences: ${this.mealPreferences}.
      Special Requirements: ${this.specialRequirements}.
      Trip Pace: ${this.tripPace}.
    `;
  }

   async sendData(){
    if (!this.valditicheck()) {
      return;
    }
    else{
    this.isLoading = true;
    this.createPrompt();
    this.tripPlan = await this.geminiService.generateText(this.prompt); 
    this.isLoading = false;
    this.getGuides(this.selectedLocation);
    this.showGuide=true;
    }
  }



  //get Guides Based on the Locations
  async getGuides(location:string) {
      try {
        const response = await fetch (`http://localhost:8080/Guide/byDateAndLocation?Location=${location}&date=${this.startDate}`);
        const data = await response.json();
        console.log(data);
        this.guides=data;
        
      } catch (error) {
       console.log(error);
       
      }
  }

  //Load ALL the Locations
  async getAll_Locations() {
    try {
      const responce = await fetch("http://localhost:8080/Location/all");
      const data = await responce.json();
      this.locations=data;
      console.log(this.locations);
      
    } catch (error) {
      
    }
  }

  //Verify Input Fields
  valditicheck(): boolean { 
    const today = new Date();
    const selectedStartDate = new Date(this.startDate);
  
    // Check if required fields are filled
    if (this.selectedLocation === '' || this.startDate === '' || this.endDate === '' || this.tripType === '' 
      || this.budget === 0 || this.accommodation === '' || this.transportation === '' || this.tripPace === '') {
        Swal.fire({
          title: 'Error',
          text: 'Please Input All Fields',
          icon: 'error',
          timer: 2000
        });
      return false;
    }
  
    // Check if the start date is not today
    if (selectedStartDate.toDateString() === today.toDateString()) {
      Swal.fire({
        title: 'Error',
        text: 'Start date cannot be today',
        icon: 'error',
        timer: 2000
      });
      return false;
    }
  
    return true;
  }
  

  


}
