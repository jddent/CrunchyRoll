import { DebugElement } from '@angular/core';
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { featuredshows } from './featuredshows.component';

describe('featuredshows', () => {
  let component: featuredshows;
  let fixture: ComponentFixture<featuredshows>;
  let cardDe: DebugElement;
  let cardEl: HTMLElement;
  let expectedTitleName: string = "One Piece" 
  let expectedEpisodes: number = 1013;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({declarations: [featuredshows]}).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(featuredshows);
    component = fixture.componentInstance;

    cardDe = fixture.debugElement.query(By.css(".row"));
    cardEl = cardDe.nativeElement;

    component.title = "One Piece"
    component.videos = 1013

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeDefined();
  });

  it('should display title name', () => {
     expect(cardEl.textContent).toContain(expectedTitleName);
  });

  it('should display number of episodes', () => {
    expect(cardEl.textContent).toContain(expectedEpisodes);
 });
});