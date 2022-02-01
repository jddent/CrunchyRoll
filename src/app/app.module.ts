import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { topnavbar } from 'src/app/navigation/topnavbar.component';
import { footer } from './navigation/footer.component';
import { SocialFooter } from './navigation/social.footer.component';
import { AppComponent } from './app.component';
import { carousel } from './components/carousel.component';
import { horizontalcard1 } from './components/horizontalcard1.component';

@NgModule({
  declarations: [
    AppComponent,
    topnavbar,
    footer,
    SocialFooter,
    carousel,
    horizontalcard1
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
