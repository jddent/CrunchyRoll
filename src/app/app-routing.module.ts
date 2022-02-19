import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ShowsLayoutComponent } from './components/shows-layout.component';
import { HomeLayoutComponent } from './components/home-layout.component';


const routes: Routes = [
  {path: '', component: HomeLayoutComponent},
  {path: 'Shows', component: ShowsLayoutComponent},
  {path: 'home', component: HomeLayoutComponent}
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
