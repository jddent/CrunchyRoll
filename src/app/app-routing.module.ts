import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ShowsLayoutComponent } from './components/shows-layout.component';
import { HomeLayoutComponent } from './components/home-layout.component';
import { MangaLayoutComponent } from './components/manga-layout.component';
import { NewsLayoutComponent } from './components/news-layout.component';


const routes: Routes = [
  {path: '', component: HomeLayoutComponent},
  {path: 'Shows', component: ShowsLayoutComponent},
  {path: 'Home', component: HomeLayoutComponent},
  {path: 'Manga', component: MangaLayoutComponent},
  {path: 'News', component: NewsLayoutComponent}
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
