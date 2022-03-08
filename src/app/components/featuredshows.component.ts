import { Component, Input } from "@angular/core";

@Component({
    selector: 'cr-featuredshows',
    templateUrl: 'featuredshows.component.html',
    styleUrls: ['featuredshows.component.css']
})

export class featuredshows{
    @Input() image: string;
    @Input() title: string;
    @Input() videos: number;

    constructor(){
        this.image = "...";
        this.title = "...";
        this.videos = 0;
        
    }

}