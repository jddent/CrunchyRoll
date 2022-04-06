import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ShowsLayoutComponent } from './components/shows-layout.component';
import { HomeLayoutComponent } from './components/home-layout.component';
import { MangaLayoutComponent } from './components/manga-layout.component';
import { NewsLayoutComponent } from './components/news-layout.component';
import { SignInLayoutComponent } from './components/sign-in-layout/sign-in-layout.component';
import { AddFeaturedShowsComponent } from './add-featured-shows/add-featured-shows.component';
import { AuthenticationComponent } from './auth/authentication/authentication.component';


const routes: Routes = [
  {path: '', component: HomeLayoutComponent},
  {path: 'Shows', component: ShowsLayoutComponent},
  {path: 'Home', component: HomeLayoutComponent},
  {path: 'Manga', component: MangaLayoutComponent},
  {path: 'News', component: NewsLayoutComponent},
  {path: 'Login', component: SignInLayoutComponent},
  {path: 'admin', component: AddFeaturedShowsComponent},
  {path: 'auth', component: AuthenticationComponent}
]

@NgModule({
  declarations: [],
  imports: [
  CommonModule,
   RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
