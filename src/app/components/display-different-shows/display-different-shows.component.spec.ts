import { DebugElement } from '@angular/core';
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DisplayDifferentShowsComponent } from './display-different-shows.component';



describe('DisplayDifferentShowsComponent', () => {
  let component: DisplayDifferentShowsComponent;
  let fixture: ComponentFixture<DisplayDifferentShowsComponent>;
  let cardDe: DebugElement;
  let cardEl: HTMLElement;
  let expectedTitleName: string = "One Piece";

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({declarations: [DisplayDifferentShowsComponent]}).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplayDifferentShowsComponent);
    component = fixture.componentInstance;

    cardDe = fixture.debugElement.query(By.css('.p-3'));
    cardEl = cardDe.nativeElement;

    component.title = "One Piece";

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeDefined();
  });

  it('should display title name', () => {
      expect(cardEl.textContent).toContain(expectedTitleName);
  });
});