/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { SelecioneTipoRecargaBilheteComponent } from './selecione-tipo-recarga-bilhete.component';

describe('SelecioneTipoRecargaBilheteComponent', () => {
  let component: SelecioneTipoRecargaBilheteComponent;
  let fixture: ComponentFixture<SelecioneTipoRecargaBilheteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelecioneTipoRecargaBilheteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelecioneTipoRecargaBilheteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
