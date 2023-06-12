/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { InsiraCartaoBilheteComponent } from './insira-cartao-bilhete.component';

describe('InsiraCartaoBilheteComponent', () => {
  let component: InsiraCartaoBilheteComponent;
  let fixture: ComponentFixture<InsiraCartaoBilheteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InsiraCartaoBilheteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InsiraCartaoBilheteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
