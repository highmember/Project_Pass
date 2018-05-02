import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StepsaleComponent } from './stepsale.component';

describe('StepsaleComponent', () => {
  let component: StepsaleComponent;
  let fixture: ComponentFixture<StepsaleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StepsaleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StepsaleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
