export class FeaturedShowsModel{
    image: string;
    title: string;
    videos: number;

    constructor(image:string, title:string, videos:number){
        this.image = image;
        this.title = title;
        this.videos = videos;
    }
}