import { Component } from "@angular/core";
import { popular_shows_mock_list } from "./popular_shows_mock_list";
import { PopularShowsModel } from "./popular_shows_model";

@Component({
  selector: 'cr-shows',
  templateUrl: 'shows-layout.component.html',
  styleUrls: ['shows-layout.component.css']  
})
export class ShowsLayoutComponent{
  PopularShows: PopularShowsModel [] = [];

  constructor(){
    for(var PopularShows of popular_shows_mock_list){
      console.log(PopularShows);
      this.PopularShows.push(PopularShows);
    }
  }

}