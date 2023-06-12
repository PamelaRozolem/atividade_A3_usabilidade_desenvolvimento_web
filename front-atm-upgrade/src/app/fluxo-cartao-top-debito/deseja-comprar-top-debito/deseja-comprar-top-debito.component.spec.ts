/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { DesejaComprarTopDebitoComponent } from './deseja-comprar-top-debito.component';

describe('DesejaComprarTopDebitoComponent', () => {
  let component: DesejaComprarTopDebitoComponent;
  let fixture: ComponentFixture<DesejaComprarTopDebitoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DesejaComprarTopDebitoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DesejaComprarTopDebitoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
