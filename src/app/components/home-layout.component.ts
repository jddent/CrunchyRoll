import { Component, OnInit } from "@angular/core";
import { LatestNewsService } from "./latestnews.service";
import { latest_news_mock_list } from "./latest_news_mock_list";
import { LatestNewsModel } from "./latest_news_model";


@Component({
    selector: 'cr-home-layout',
    templateUrl: 'home-layout.component.html',
    styleUrls: ['home-layout.component.css']
})

export class HomeLayoutComponent implements OnInit{
    LatestNews: LatestNewsModel [] = [];

    constructor(private latestNewsService:LatestNewsService){
     
    }

    ngOnInit(): void{
      this.latestNewsService.getLatestNews().subscribe(data => {
        console.log("Fetching Latest News data");
        for(var LatestNews of data){
          console.log(LatestNews);
          this.LatestNews.push(LatestNews);
        }
      })
    }
}