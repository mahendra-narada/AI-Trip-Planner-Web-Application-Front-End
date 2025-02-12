import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CaroselComponent } from './carosel.component';

describe('CaroselComponent', () => {
  let component: CaroselComponent;
  let fixture: ComponentFixture<CaroselComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CaroselComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CaroselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
