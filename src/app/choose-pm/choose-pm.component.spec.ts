import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChoosePmComponent } from './choose-pm.component';

describe('ChoosePmComponent', () => {
  let component: ChoosePmComponent;
  let fixture: ComponentFixture<ChoosePmComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChoosePmComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChoosePmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
