/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { CardBannerComponent } from './card-banner.component';

describe('CardBannerComponent', () => {
  let component: CardBannerComponent;
  let fixture: ComponentFixture<CardBannerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardBannerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardBannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
