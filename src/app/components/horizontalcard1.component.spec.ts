import { DebugElement } from '@angular/core';
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { horizontalcard1 } from './horizontalcard1.component';

describe('horizontalcard1', () => {
  let component: horizontalcard1;
  let fixture: ComponentFixture<horizontalcard1>;
  let cardDe: DebugElement;
  let cardEl: HTMLElement;
  let expectedAuthorName: string = "Nick Smith";

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({declarations: [horizontalcard1]}).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(horizontalcard1);
    component = fixture.componentInstance;

    cardDe = fixture.debugElement.query(By.css('.card'));
    cardEl = cardDe.nativeElement;

    component.author = "Nick Smith";

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeDefined();
  });

  it('should display author name', () => {
      expect(cardEl.textContent).toContain(expectedAuthorName);
  });
});