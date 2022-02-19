import { Component } from "@angular/core";
import { latest_news_mock_list } from "./latest_news_mock_list";
import { LatestNewsModel } from "./latest_news_model";


@Component({
    selector: 'cr-home-layout',
    templateUrl: 'home-layout.component.html',
    styleUrls: ['home-layout.component.css']
})

export class HomeLayoutComponent{
    LatestNews: LatestNewsModel [] = [];

    constructor(){
      for(var LatestNews of latest_news_mock_list){
        console.log(LatestNews);
        this.LatestNews.push(LatestNews);
      }
    }
}