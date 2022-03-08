import { Component, Input } from "@angular/core";

@Component({
    selector: 'cr-featuredshows',
    templateUrl: 'featuredshows.component.html',
    styleUrls: ['featuredshows.component.css']
})

export class horizontalcard2{
    @Input() image: string;
    @Input() title: string;

    constructor(){
        this.image = "";
        this.title = "";
       
        
    }

}