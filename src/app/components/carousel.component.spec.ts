import { DebugElement } from '@angular/core';
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { carousel } from './carousel.component';

describe('carousel', () => {
  let component: carousel;
  let fixture: ComponentFixture<carousel>;


  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({declarations: [carousel]}).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(carousel);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeDefined();
  });

});