export class NewsModel{
    image: string;
    title: string;
    author: string;
    description: string;
    subtitle: string;
    time: string;

    constructor(image:string, title:string, author:string, description:string, subtitle:string,time:string){
        this.image = image;
        this.title = title;
        this.author = author;
        this.description = description;
        this.subtitle = subtitle;
        this.time = time;
    }
}