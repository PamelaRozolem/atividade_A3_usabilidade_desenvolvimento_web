/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { ValorDinheiroAceitoComponent } from './valor-dinheiro-aceito.component';

describe('ValorDinheiroAceitoComponent', () => {
  let component: ValorDinheiroAceitoComponent;
  let fixture: ComponentFixture<ValorDinheiroAceitoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ValorDinheiroAceitoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ValorDinheiroAceitoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
