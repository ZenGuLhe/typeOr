export enum Music {
    JAZZ,
    ROCK
}

export interface IMusician{
    addAlbum(album:Album):void;
}

export class Musician implements IMusician{
    private _style: Music;
    private _albums: Album[] = [];
    constructor(public firstName: string,
                public lastName: string,
                public age: number) {
    }
    get style(): Music {
        return this._style;
    }

    set style(value: Music) {
        this._style = value;
    }

    get albums():Album[]{
        return this._albums;
    }

    addAlbum(album: Album): void {
        this._albums.push(album);
    }

    toString():string{
        return `${this.firstName} ${this.lastName} plays ${Music[this._style]}`;
    }
}

export class JazzMusician extends Musician{
    constructor(
        public firstName: string,
        public lastName: string,
        public age: number){
        super(firstName,lastName,age);
        this.style = Music.JAZZ;
    }
}

export class RockStar extends Musician{
    constructor(
        firstName: string,
        lastName: string,
        age: number){
        super(firstName,lastName,age);
        this.style = Music.ROCK;
    }
}

export class Album{
    constructor(public title:string){}

    toString():string{
        return this.title;
    }
}

export function display(elems:any[]){
    elems
        .forEach(e=>
            console.log(e.toString())
        );
}