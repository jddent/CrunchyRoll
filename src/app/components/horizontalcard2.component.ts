import { Component, Input } from "@angular/core";

@Component({
    selector: 'cr-horizontalcard2',
    templateUrl: 'horizontalcard2.component.html',
    styleUrls: ['horizontalcard2.component.css']
})

export class horizontalcard2{
    @Input() image: string;
    @Input() title: string;

    constructor(){
        this.image = "";
        this.title = "";
       
        
    }

}