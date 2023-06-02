/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { DigiteSenhaDebitoComponent } from './digite-senha-debito.component';

describe('DigiteSenhaDebitoComponent', () => {
  let component: DigiteSenhaDebitoComponent;
  let fixture: ComponentFixture<DigiteSenhaDebitoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DigiteSenhaDebitoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DigiteSenhaDebitoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
