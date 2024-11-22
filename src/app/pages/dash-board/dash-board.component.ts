import { Component } from '@angular/core';
import { CaroselComponent } from '../carosel/carosel.component';
import { SamplePlaceComponent } from '../sample-place/sample-place.component';
import { TripPlanComponent } from '../trip-plan/trip-plan.component';
import { PeopleComponent } from '../people/people.component';

@Component({
  selector: 'app-dash-board',
  standalone: true,
  imports: [CaroselComponent,SamplePlaceComponent,TripPlanComponent,PeopleComponent],
  templateUrl: './dash-board.component.html',
  styleUrl: './dash-board.component.css'
})
export class DashBoardComponent {

}
