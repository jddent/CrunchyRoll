import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { LatestNewsModel } from "./latest_news_model";

@Injectable({
    providedIn: 'root'
})

export class LatestNewsService{
    private baseURL:string = "https://crunchyroll-6a332-default-rtdb.firebaseio.com/";
    private LatestNewsEndpoint:string = "latestnews.json";

    constructor(private http:HttpClient) {

    }

    public getLatestNews() {
        return this.http.get<LatestNewsModel []>(this.baseURL + this.LatestNewsEndpoint);
    }
}