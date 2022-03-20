
import { Injectable } from "@angular/core";
import { LatestNewsModel } from "./latest_news_model";
import { AngularFireDatabase } from '@angular/fire/compat/database';

@Injectable({
    providedIn: 'root'
})

export class LatestNewsService{
    constructor(private db: AngularFireDatabase) {

    }

    public getLatestNews() {
        return this.db.list<LatestNewsModel>("latestnews").valueChanges();
    }
}