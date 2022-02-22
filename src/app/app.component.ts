import { Component } from '@angular/core';
import { latest_news_mock_list } from './components/latest_news_mock_list';
import { LatestNewsModel } from './components/latest_news_model';
import { popular_mangas_mock_list } from './components/popular_mangas_mock_list';
import { PopularMangasModel } from './components/popular_mangas_model';
import { AppRoutingModule } from './app-routing.module';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  
})
export class AppComponent {
  title = 'crunchyroll';
 
}
