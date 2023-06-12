/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { SelecionarFormaPagamentoBilheteComponent } from './selecionar-forma-pagamento-bilhete.component';

describe('SelecionarFormaPagamentoBilheteComponent', () => {
  let component: SelecionarFormaPagamentoBilheteComponent;
  let fixture: ComponentFixture<SelecionarFormaPagamentoBilheteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelecionarFormaPagamentoBilheteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelecionarFormaPagamentoBilheteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
