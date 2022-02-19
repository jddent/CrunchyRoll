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
import { ShowsLayoutComponent } from './components/shows-layout.component';
import { HomeLayoutComponent } from './components/home-layout.component';

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
    ShowsLayoutComponent,
    HomeLayoutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
