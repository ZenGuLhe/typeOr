import { Util } from './UtilModule';

function log(target: Object, propertyKey: string, descriptor: TypedPropertyDescriptor<any>) {
  var originalMethod = descriptor.value;

  descriptor.value = function (...args: any[]) {
    var result = originalMethod.apply(this, args);
    Util.log(result);
    return result;
  };

  return descriptor;
}

function StyleMusic(option) {
  return (target: any) => {
    let newConstructor = function (...args) {
      target.apply(this, args);
      this.style = option.style;
    };

    newConstructor.prototype = target.prototype;

    return <any>newConstructor;
  };
}

/*function JazzMan(target:any){
    let newConstructor = function (firstName, lastName, age) {
        target.call(this, firstName, lastName, age);
        this.style = Music.JAZZ;
    };

    newConstructor.prototype = target.prototype;

    return <any> newConstructor;
}

function Rocker(target:any){
    let newConstructor = function (firstName, lastName, age) {
        target.call(this, firstName, lastName, age);
        this.style = Music.ROCK;
    };

    newConstructor.prototype = target.prototype;

    return <any> newConstructor;
}*/

export enum Music { JAZZ, ROCK };

export class Album {
  constructor(public title: string) { }

  toString(): string {
    return this.title;
  }
}

interface MusicianI {
  addAlbum: (Album) => void;
}

export class Musician implements MusicianI {
  private _style: Music;
  private _albums: Album[] = [];

  constructor(public firstName: string, public lastName: string, public age: number) { }

  get style(): Music { return this._style; }
  set style(value: Music) { this._style = value; }

  get albums(): Album[] { return this._albums; }
  set albums(value: Album[]) { this._albums = value; }

  toString(): string {
    return `${this.firstName} ${this.lastName} plays ${Music[this.style]}`;
  }

  addAlbum(album: Album) {
    this._albums.push(album);
  }
}

@StyleMusic({ style: Music.JAZZ })
export class JazzMusician extends Musician {
  constructor(public firstName: string, public lastName: string, public age: number) {
    super(firstName, lastName, age);
  }

  @log
  swing() { return 'I\'m swinging!'; }
}

@StyleMusic({ style: Music.ROCK })
export class RockStar extends Musician {
  constructor(public firstName: string, public lastName: string, public age: number) {
    super(firstName, lastName, age);
  }

  @log
  shout() { return 'I\'m shouting!'; }
}

function display(objects: any[]) {
  objects.forEach(element => {
    console.log(element.toString());
  });
}
