/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { VendaEmAndamentoComponent } from './venda-em-andamento.component';

describe('VendaEmAndamentoComponent', () => {
  let component: VendaEmAndamentoComponent;
  let fixture: ComponentFixture<VendaEmAndamentoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VendaEmAndamentoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VendaEmAndamentoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
