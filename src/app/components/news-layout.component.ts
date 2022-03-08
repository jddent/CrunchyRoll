import { Component } from "@angular/core";
import { LatestNewsService } from "./latestnews.service";
import { news_mock_list } from "./news_mock_list";
import { NewsModel } from "./news_model";

@Component({
  selector: 'cr-news',
  templateUrl: 'news-layout.component.html',
  styleUrls: ['news-layout.component.css']  
})
export class NewsLayoutComponent{
  News: NewsModel [] = [];

  constructor(private latestNews:LatestNewsService){
    for(var News of news_mock_list){
      console.log(News);
      this.News.push(News);
    }
  }
}