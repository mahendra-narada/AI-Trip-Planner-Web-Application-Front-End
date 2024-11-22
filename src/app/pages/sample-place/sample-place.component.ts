import { Component, OnInit } from '@angular/core';
import AOS from 'aos';

@Component({
  selector: 'app-sample-place',
  standalone: true,
  imports: [],
  templateUrl: './sample-place.component.html',
  styleUrl: './sample-place.component.css'
})
export class SamplePlaceComponent  implements OnInit{
  
  ngOnInit(){
    AOS.init();
  }

  
  

}
