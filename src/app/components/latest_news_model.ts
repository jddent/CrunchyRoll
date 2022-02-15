export class LatestNewsModel{
    image: string;
    title: string;
    author: string;
    description: string;

    constructor(image:string, title:string, author:string, description:string){
        this.image = image;
        this.title = title;
        this.author = author;
        this.description = description;
    }
}
