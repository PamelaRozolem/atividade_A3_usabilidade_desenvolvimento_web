/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { TransacaoAprovadaQrCodeComponent } from './transacao-aprovada-qr-code.component';

describe('TransacaoAprovadaQrCodeComponent', () => {
  let component: TransacaoAprovadaQrCodeComponent;
  let fixture: ComponentFixture<TransacaoAprovadaQrCodeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TransacaoAprovadaQrCodeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TransacaoAprovadaQrCodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
