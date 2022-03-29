import { Component, OnInit } from '@angular/core';
import { FeaturedShowsService } from '../components/featuredshows.service';
import { FeaturedShowsModel } from '../components/featured_shows_model';

@Component({
  selector: 'cr-add-featured-shows',
  templateUrl: './add-featured-shows.component.html',
  styleUrls: ['./add-featured-shows.component.css']
})
export class AddFeaturedShowsComponent implements OnInit {

  constructor(public fs : FeaturedShowsService) { }

  ngOnInit(): void {
  }

  addShow(show : FeaturedShowsModel){
    console.log("You clicked add show");
    console.log(show);
    this.fs.addShow(show)
    
  }

}
