export class serie {
    id: number;
    name: string;
    channel: string;
    seasons: number;
    description: string;
    url_direction: string;
    img: string;

    public constructor(id: number, name: string, channel: string, 
        seasons: number, description: string, 
        url_direction: string, img: string){
        this.id = id;
        this.name = name;
        this.channel = channel;
        this.seasons = seasons;
        this.description = description;
        this.url_direction = url_direction;
        this.img = img;
    }
}
