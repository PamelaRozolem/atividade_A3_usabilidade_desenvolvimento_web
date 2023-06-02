/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { SelecionarValorTpRecargaComponent } from './selecionar-valor-tp-recarga.component';

describe('SelecionarValorTpRecargaComponent', () => {
  let component: SelecionarValorTpRecargaComponent;
  let fixture: ComponentFixture<SelecionarValorTpRecargaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelecionarValorTpRecargaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelecionarValorTpRecargaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
