/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { PagtoCartaoDebitoComponent } from './pagto-cartao-debito.component';

describe('PagtoCartaoDebitoComponent', () => {
  let component: PagtoCartaoDebitoComponent;
  let fixture: ComponentFixture<PagtoCartaoDebitoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PagtoCartaoDebitoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PagtoCartaoDebitoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
