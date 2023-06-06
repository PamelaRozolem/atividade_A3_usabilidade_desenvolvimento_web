/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { PagtoDinheiroComponent } from './pagto-dinheiro.component';

describe('PagtoDinheiroComponent', () => {
  let component: PagtoDinheiroComponent;
  let fixture: ComponentFixture<PagtoDinheiroComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PagtoDinheiroComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PagtoDinheiroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
