import { Component, OnInit } from "@angular/core";
import { FeaturedShowsService } from "./featuredshows.service";
import { FeaturedShowsModel } from "./featured_shows_model";
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
    FeaturedShows: FeaturedShowsModel [] = [];

    constructor(private latestNewsService:LatestNewsService, private featuredShowsService:FeaturedShowsService){
    }

    ngOnInit(): void{
      this.featuredShowsService.getFeaturedShows().subscribe(data =>{
        console.log("Fetching Featured Shows Data");
        for(var FeaturedShows of data){
          console.log(FeaturedShows);
          this.FeaturedShows.push(FeaturedShows);
        }
      })
      this.latestNewsService.getLatestNews().subscribe(data => {
        console.log("Fetching Latest News data");
        for(var LatestNews of data){
          console.log(LatestNews);
          this.LatestNews.push(LatestNews);
        }
      })
    }
}