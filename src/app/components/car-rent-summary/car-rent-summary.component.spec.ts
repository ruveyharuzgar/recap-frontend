import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarRentSummaryComponent } from './car-rent-summary.component';

describe('CarRentSummaryComponent', () => {
  let component: CarRentSummaryComponent;
  let fixture: ComponentFixture<CarRentSummaryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarRentSummaryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CarRentSummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
