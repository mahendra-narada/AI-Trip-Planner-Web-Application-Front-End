import { NgFor, NgIf } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-guide-input',
  standalone: true,
  imports: [FormsModule,NgFor,NgIf],
  templateUrl: './guide-input.component.html',
  styleUrl: './guide-input.component.css'
})
export class GuideInputComponent implements OnInit {


  photoPreview: any;
  languages:any[] =[];
  selectedLanguage:string='';
  addedLangages:string[]=[];

  locations:any[]=[];
  selectedLocation:string='';
  addedLocations: string[]=[];

  telePhone: string='';
  FullName:string='';
  Email:string = localStorage.getItem("userEmail")||'';
  userId:string = localStorage.getItem("userId")||'';
  experience:number=0;
  budget:string='';
  imageBase64: string = '';

  ngOnInit() {
    this.getAll_Languages();
    this.getAll_Locations();
  }

  //Fetch aLL the Langugaes
  async getAll_Languages() {
    try {
      
    const responce =  await fetch("http://localhost:8080/Language/all");
    const data = await responce.json();
    this.languages = data
    } catch (error) {
      
    }
  }

  //Fetch All the Locations
  async getAll_Locations() {
    try {
      const responce = await fetch("http://localhost:8080/Location/all");
      const data = await responce.json();
      this.locations=data;
    } catch (error) {
      
    }
  }


  //Add Langugae
  addLanguageToTextArea() {
    if (this.selectedLanguage && !this.addedLangages.includes(this.selectedLanguage)) {
        this.addedLangages.push(this.selectedLanguage);
        this.selectedLanguage='';
    }
    }

  //Remove Language
  removeLanguage(Language:string){
    this.addedLangages = this.addedLangages.filter(l=>l!==Language);
  }


  //RemoveLocation
  removeLocation(location: string) {
    this.addedLocations = this.addedLocations.filter(lo=>lo!==location);
  }

  //Add Location
  addLocationToTextArea() {
    if (this.selectedLocation && !this.addedLocations.includes(this.selectedLocation)) {
      this.addedLocations.push(this.selectedLocation);
      this.selectedLocation=''; 
    }
  }

  //Check the Phone number
  isValidPhoneNumber(): boolean {
    const phoneRegex = /^[0-9]{10}$/;
    return phoneRegex.test(this.telePhone);
}


onPhotoSelected(event: any) {
  const file = event.target.files[0];
  if (file) {
    const reader = new FileReader();
    reader.onload = (e) => {
      this.photoPreview = e.target?.result;
      this.imageBase64 = (e.target?.result as string).split(',')[1]; 
    };
    reader.readAsDataURL(file);
  }
}


//Submit
  async Submit() {
  try {
    const response = await fetch ("http://localhost:8080/Guide/add",
      {
        method:'POST',
        headers:{
          'Content-Type':'application/json',
        },
        body:JSON.stringify({
          userId:this.userId,
          fullName:this.FullName,
          experience:this.experience,
          languages:this.addedLangages,
          email:this.Email,
          contactNumber:this.telePhone,
          budget:this.budget,
          image: this.imageBase64,
          locations:this.addedLocations
        }),
      }
    );
    if(response.ok){
      const data = await response.json();
      Swal.fire({
        title: 'Successful!',
        text: 'You have successfully Created Guide Account. Welcome!',
        icon: 'success',
        timer: 2000
      });
    }
  } catch (error) {
    
  }
}





}