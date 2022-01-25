import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { topnavbar } from 'src/app/navigation/topnavbar.component';
import { footer } from './navigation/footer.component';
import { SocialFooter } from './navigation/social.footer.component';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
    topnavbar,
    footer,
    SocialFooter
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
