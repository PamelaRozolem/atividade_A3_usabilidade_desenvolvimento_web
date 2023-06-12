/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { QuantidadeUnidadeTopDebito } from './quantidade-unidade-top-debito.component';

describe('QuantidadeUnidadeTopDebito', () => {
  let component: QuantidadeUnidadeTopDebito;
  let fixture: ComponentFixture<QuantidadeUnidadeTopDebito>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuantidadeUnidadeTopDebito ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuantidadeUnidadeTopDebito);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
