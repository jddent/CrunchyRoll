import { Component, Input } from "@angular/core";

@Component({
    selector: 'cr-horizontalcard3',
    templateUrl: 'horizontalcard3.component.html',
    styleUrls: ['horizontalcard3.component.css']
})

export class horizontalcard3{
    @Input() title: string;
    @Input() description: string; 

    constructor(){
        this.title = "";
        this.description = "";
    }
}