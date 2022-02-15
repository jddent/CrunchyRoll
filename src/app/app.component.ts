import { Component } from '@angular/core';
import { latest_news_mock_list } from './components/latest_news_mock_list';
import { LatestNewsModel } from './components/latest_news_model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'crunchyroll';
  LatestNews: LatestNewsModel [] = [];

  constructor(){
    for(var LatestNews of latest_news_mock_list){
      console.log(LatestNews);
      this.LatestNews.push(LatestNews);
    }
  }
}
