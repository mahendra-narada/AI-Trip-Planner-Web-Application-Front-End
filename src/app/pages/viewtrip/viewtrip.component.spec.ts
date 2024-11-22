import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewtripComponent } from './viewtrip.component';

describe('ViewtripComponent', () => {
  let component: ViewtripComponent;
  let fixture: ComponentFixture<ViewtripComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ViewtripComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewtripComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
