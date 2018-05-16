import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StorematComponent } from './storemat.component';

describe('StorematComponent', () => {
  let component: StorematComponent;
  let fixture: ComponentFixture<StorematComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StorematComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StorematComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
