/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { RetireBilheteComponent } from './retire-bilhete.component';

describe('RetireBilheteComponent', () => {
  let component: RetireBilheteComponent;
  let fixture: ComponentFixture<RetireBilheteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RetireBilheteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RetireBilheteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
