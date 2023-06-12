/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { RecargSucessoTopDebitoComponent } from './recarga-sucesso-top-debito.component';

describe('RecargSucessoTopDebitoComponent', () => {
  let component: RecargSucessoTopDebitoComponent;
  let fixture: ComponentFixture<RecargSucessoTopDebitoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecargSucessoTopDebitoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecargSucessoTopDebitoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
