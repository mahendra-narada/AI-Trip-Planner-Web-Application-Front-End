import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./pages/header/header.component";
import { CaroselComponent } from "./pages/carosel/carosel.component";
import { SamplePlaceComponent } from "./pages/sample-place/sample-place.component";
import { TripPlanComponent } from './pages/trip-plan/trip-plan.component';
import { PeopleComponent } from "./pages/people/people.component";
import { FooterComponent } from "./pages/footer/footer.component";
import { DashBoardComponent } from "./pages/dash-board/dash-board.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, CaroselComponent, SamplePlaceComponent, TripPlanComponent, PeopleComponent, FooterComponent, DashBoardComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'tripPlanner';
}
