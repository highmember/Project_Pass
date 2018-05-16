import { async, ComponentFixture, TestBed } from '@angular/core/testing';

 import { Sale2Component } from './sale2.component';
import {Component} from '@angular/core';

describe('Sale2Component', () => {
  let component: Sale2Component;
  let fixture: ComponentFixture<Sale2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Sale2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Sale2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

