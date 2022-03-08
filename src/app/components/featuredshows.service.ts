import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { FeaturedShowsModel } from "./featured_shows_model";

@Injectable({
    providedIn: 'root'
})

export class FeaturedShowsService{
    private baseURL:string = "https://crunchyroll-6a332-default-rtdb.firebaseio.com/";
    private featuredShowsEndpoint:string = "featuredshows.json";

    constructor(private http:HttpClient) {

    }

    public getFeaturedShows() {
        return this.http.get<FeaturedShowsModel []>(this.baseURL + this.featuredShowsEndpoint);
    }
}