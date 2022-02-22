import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'cr-display-different-shows',
  templateUrl: './display-different-shows.component.html',
  styleUrls: ['./display-different-shows.component.css']
})
export class DisplayDifferentShowsComponent {
  @Input() image: string;
  @Input() title: string;
  
  constructor(){
    this.image = " ";
    this.title = " ";
  }

  

}
