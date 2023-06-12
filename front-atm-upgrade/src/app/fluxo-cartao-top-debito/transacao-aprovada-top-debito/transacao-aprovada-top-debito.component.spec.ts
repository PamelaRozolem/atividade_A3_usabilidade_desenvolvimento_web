/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { TransacaoAprovadaTopDebitoComponent } from './transacao-aprovada-top-debito.component';

describe('TransacaoAprovadaTopDebitoComponent', () => {
  let component: TransacaoAprovadaTopDebitoComponent;
  let fixture: ComponentFixture<TransacaoAprovadaTopDebitoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TransacaoAprovadaTopDebitoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TransacaoAprovadaTopDebitoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
