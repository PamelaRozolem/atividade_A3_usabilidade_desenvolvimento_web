/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { RecargaRealizadaSucessoComponent } from './recarga-realizada-sucesso.component';

describe('RecargaRealizadaSucessoComponent', () => {
  let component: RecargaRealizadaSucessoComponent;
  let fixture: ComponentFixture<RecargaRealizadaSucessoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecargaRealizadaSucessoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecargaRealizadaSucessoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
