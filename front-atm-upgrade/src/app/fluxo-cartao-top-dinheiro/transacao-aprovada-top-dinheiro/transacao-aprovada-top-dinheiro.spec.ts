/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { TransacaoAprovadaTopDinheiroComponent } from './transacao-aprovada-top-dinheiro.component';

describe('TransacaoAprovadaTopDinheiroComponent', () => {
  let component: TransacaoAprovadaTopDinheiroComponent;
  let fixture: ComponentFixture<TransacaoAprovadaTopDinheiroComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TransacaoAprovadaTopDinheiroComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TransacaoAprovadaTopDinheiroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
