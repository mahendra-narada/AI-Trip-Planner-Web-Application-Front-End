import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SamplePlaceComponent } from './sample-place.component';

describe('SamplePlaceComponent', () => {
  let component: SamplePlaceComponent;
  let fixture: ComponentFixture<SamplePlaceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SamplePlaceComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SamplePlaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
