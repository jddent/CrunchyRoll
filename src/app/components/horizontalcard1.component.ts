import { Component, Input } from "@angular/core";

@Component({
    selector: 'cr-horizontalcard1',
    templateUrl: 'horizontalcard1.component.html',
    styleUrls: ['horizontalcard1.component.css']
})

export class horizontalcard1{
    @Input() image: string;
    @Input() title: string;
    @Input() author: string;
    @Input() description: string; 

    constructor(){
        this.image = "";
        this.title = "";
        this.author = "";
        this.description = "Missing description";
        
    }
}