import { Component } from "@angular/core";
import { popular_mangas_mock_list } from "./popular_mangas_mock_list";
import { PopularMangasModel } from "./popular_mangas_model";

@Component({
  selector: 'cr-manga',
  templateUrl: 'manga-layout.component.html',
  styleUrls: ['manga-layout.component.css']  
})
export class MangaLayoutComponent{
  PopularManga: PopularMangasModel [] = [];

  constructor(){
    for(var PopularManga of popular_mangas_mock_list){
      console.log(PopularManga);
      this.PopularManga.push(PopularManga);
    }
  }
}