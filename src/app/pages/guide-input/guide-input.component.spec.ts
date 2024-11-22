import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GuideInputComponent } from './guide-input.component';

describe('GuideInputComponent', () => {
  let component: GuideInputComponent;
  let fixture: ComponentFixture<GuideInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GuideInputComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GuideInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
