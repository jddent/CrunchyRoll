import { Component, Input } from "@angular/core";

@Component({
    selector: 'cr-newshorizontalcard',
    templateUrl: 'newshorizontalcard.component.html',
    styleUrls: ['newshorizontalcard.component.css']
})

export class NewsHorizontalCard{
    @Input() image: string;
    @Input() title: string;
    @Input() subtitle: string;
    @Input() author: string;
    @Input() description: string;
    @Input() time: string; 

    constructor(){
        this.image = "";
        this.title = "";
        this.author = "";
        this.description = "Missing description";
        this.time = "";
        this.subtitle = "";
    }
}