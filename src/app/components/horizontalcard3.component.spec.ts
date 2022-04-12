import { DebugElement } from '@angular/core';
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { horizontalcard3 } from './horizontalcard3.component';

describe('horizontalcard3', () => {
  let component: horizontalcard3;
  let fixture: ComponentFixture<horizontalcard3>;
  let cardDe: DebugElement;
  let cardEl: HTMLElement;
  let expectedTitleName: string = "One Piece";
  let expectedDescription: string = "A journey about a hero named Luffy, who sails the grand line to obtain the One Piece."

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({declarations: [horizontalcard3]}).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(horizontalcard3);
    component = fixture.componentInstance;

    cardDe = fixture.debugElement.query(By.css('.card'));
    cardEl = cardDe.nativeElement;

    component.title = "One Piece";
    component.description = "A journey about a hero named Luffy, who sails the grand line to obtain the One Piece."

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeDefined();
  });

  it('should display title name', () => {
      expect(cardEl.textContent).toContain(expectedTitleName);
  });
  it('should display description', () => {
    expect(cardEl.textContent).toContain(expectedDescription);
});
});