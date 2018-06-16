import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LandCalculatorComponent } from './land-calculator.component';

describe('LandCalculatorComponent', () => {
  let component: LandCalculatorComponent;
  let fixture: ComponentFixture<LandCalculatorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LandCalculatorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LandCalculatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
