/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { SelecionarFormaPagamentoComponent } from './selecionar-forma-pagamento.component';

describe('SelecionarFormaPagamentoComponent', () => {
  let component: SelecionarFormaPagamentoComponent;
  let fixture: ComponentFixture<SelecionarFormaPagamentoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelecionarFormaPagamentoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelecionarFormaPagamentoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
