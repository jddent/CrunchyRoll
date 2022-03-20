
import { Injectable } from "@angular/core";
import { FeaturedShowsModel } from "./featured_shows_model";
import { AngularFireDatabase } from '@angular/fire/compat/database';

@Injectable({
    providedIn: 'root'
})

export class FeaturedShowsService{
   
    constructor(private db:AngularFireDatabase) {

    }

    public getFeaturedShows() {
        return this.db.list<FeaturedShowsModel>("featuredshows").valueChanges();
    }
}