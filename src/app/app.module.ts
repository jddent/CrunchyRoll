import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { topnavbar } from 'src/app/navigation/topnavbar.component';
import { footer } from './navigation/footer.component';
import { SocialFooter } from './navigation/social.footer.component';
import { AppComponent } from './app.component';
import { carousel } from './components/carousel.component';
import { horizontalcard1 } from './components/horizontalcard1.component';
import { horizontalcard2 } from './components/horizontalcard2.component';
import { horizontalcard3 } from './components/horizontalcard3.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeLayoutComponent } from './components/home-layout.component';
import { MangaLayoutComponent } from './components/manga-layout.component';
import { NewsLayoutComponent } from './components/news-layout.component';
import { VerticalCard } from './components/verticalcard.component';
import { LayoutNavBar } from './navigation/layoutnavbar.component';
import { DisplayDifferentShowsComponent } from './components/display-different-shows/display-different-shows.component';
import { ShowsNavBar } from './navigation/showsnavbar.component';
import { ShowsLayoutComponent } from './components/shows-layout.component';
import { NewsNavBar } from './navigation/newsnavbar.component';
import { NewsHorizontalCard } from './components/newshorizontalcard.component';
import { NewsSearchBar } from './navigation/newssearchbar.component';
import { UserInfoComponent } from './user-info/user-info.component';

@NgModule({
  declarations: [
    AppComponent,
    topnavbar,
    footer,
    SocialFooter,
    carousel,
    horizontalcard1,
    horizontalcard2,
    horizontalcard3,
    HomeLayoutComponent,
    NewsLayoutComponent,
    MangaLayoutComponent,
    VerticalCard,
    LayoutNavBar,
    DisplayDifferentShowsComponent,
    ShowsNavBar,
    ShowsLayoutComponent,
    NewsNavBar,
    NewsHorizontalCard,
    NewsSearchBar,
    UserInfoComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
