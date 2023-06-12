/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { PagtoCartaoTopDebitoComponent } from './pagto-cartao-top-debito.component';

describe('PagtoCartaoTopDebitoComponent', () => {
  let component: PagtoCartaoTopDebitoComponent;
  let fixture: ComponentFixture<PagtoCartaoTopDebitoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PagtoCartaoTopDebitoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PagtoCartaoTopDebitoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
