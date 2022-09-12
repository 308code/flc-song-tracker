import {Played} from "./played.model";

export class Song {
  constructor(private id: string = "", private title: string="", private artist: string ="", private aka: string[] = [],
              private played: Played[] = []) {}

  public getId(): string {
    return this.id;
  }

  public setId(value: string) {
    this.id = value;
  }

  public getTitle(): string {
    return this.title;
  }

  public setTitle(value: string) {
    this.title = value;
  }

  public getArtist(): string {
    return this.artist;
  }

  public setArtist(value: string) {
    this.artist = value;
  }

  public getAka(): string[] {
    return this.aka;
  }

  public setAka(value: string[]) {
    this.aka = value;
  }

  public getPlayed(): Played[] {
    return this.played;
  }
  public setPlayed(value: Played[]) {
    this.played = value;
  }
}
