import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TripPlanComponent } from './trip-plan.component';

describe('TripPlanComponent', () => {
  let component: TripPlanComponent;
  let fixture: ComponentFixture<TripPlanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TripPlanComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TripPlanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
