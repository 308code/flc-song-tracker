import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {map, Observable} from "rxjs";
import {Song} from "../model/song.model";
import {environment} from "../../environments/environment";
import {Played} from "../model/played.model";
import {SongInterface} from "../model/songInterface";

@Injectable({
  providedIn: 'root'
})
export class SongService {
  constructor(private http: HttpClient) { }

  getAllSongsByLastPlayed(): Observable<Song[]>{
    let url = 'http://' + environment.host + ':' + environment.restApiPort + '/api/songs/played';
    return this.http.get<SongInterface[]>(url)
      .pipe(map( responseData => {
        let songs: Song[] = [];
        responseData.forEach( song => {
          let p: Played[] = [];
          song.played.forEach( timePlayed => {
            p.push(new Played(timePlayed.datePlayed.toString().slice(0,10),timePlayed.notes,timePlayed.series));
            });
          songs.push(new Song(song.id,song.title,song.artist,song.aka,p));
        });
        return songs;
      }));
  }
  getAllSongsWithinDates(from: Date, to: Date): Observable<Song[]>{
    let url = 'http://' + environment.host + ':' + environment.restApiPort + '/api/songs/' + from.toISOString().slice(0,10)+'/'+ to.toISOString().slice(0,10);
    return this.http.get<SongInterface[]>(url)
      .pipe(map( responseData => {
        let songs: Song[] = [];
        responseData.forEach( song => {
          let p: Played[] = [];
          song.played.forEach( timePlayed => {
            p.push(new Played(timePlayed.datePlayed.toString().slice(0,10),timePlayed.notes,timePlayed.series));
          });
          songs.push(new Song(song.id,song.title,song.artist,song.aka,p));
        });
        return songs;
      }));
  }

  getSongById(id: string): Observable<Song>{
    let url = 'http://' + environment.host + ':' + environment.restApiPort + '/api/songs/' + id;
    return  this.http.get<SongInterface>(url)
      .pipe(map(responseData => {
        let p: Played[] = [];
        if(responseData) {
          responseData.played.forEach(play => {
            p.push(new Played(play.datePlayed.toString().slice(0, 10), play.notes, play.series));
          });
          return new Song(responseData.id, responseData.title, responseData.artist, responseData.aka, p);
        }else{
          return new Song();
        }
      }));
  }

  getSongByTitle(title: string): Observable<Song[]>{
    let url = 'http://' + environment.host + ':' + environment.restApiPort + '/api/songs/title/' + title;
    return this.http.get<SongInterface[]>(url)
      .pipe(map( responseData => {
        let songs: Song[] = [];
        if(responseData) {
          responseData.forEach(song => {
            let p: Played[] = [];
            song.played.forEach(timePlayed => {
              p.push(new Played(timePlayed.datePlayed.toString().slice(0, 10), timePlayed.notes, timePlayed.series));
            });
            songs.push(new Song(song.id, song.title, song.artist, song.aka, p));
          });
        }
        return songs;
      }));
  }

  getSongsByArtist(title: string): Observable<Song[]>{
    let url = 'http://' + environment.host + ':' + environment.restApiPort + '/api/songs/artist/' + title;
    return this.http.get<SongInterface[]>(url)
      .pipe(map( responseData => {
        let songs: Song[] = [];
        if(responseData) {
          responseData.forEach(song => {
            let p: Played[] = [];
            song.played.forEach(timePlayed => {
              p.push(new Played(timePlayed.datePlayed.toString().slice(0, 10), timePlayed.notes, timePlayed.series));
            });
            songs.push(new Song(song.id, song.title, song.artist, song.aka, p));
          });
        }
        return songs;
      }));
  }

  public updateSong(song: Song){
    let url = 'http://' + environment.host + ':' + environment.restApiPort + '/api/songs';
    console.log("url = " + url);
    console.log("song = " + JSON.stringify(song));
    this.http.put(url,song).subscribe(() => {
      console.log("success!");
    },() => {
      console.log("error!");
    });
    console.log("I'm after the push!");
  }

  public createSong(title: string, artist: string, aka : string) {
    let url = 'http://' + environment.host + ':' + environment.restApiPort + '/api/songs';
    console.log("url = " + url);
    let akaArray = aka.split(",");
    let playedArray : Played[] = [];
    let song = new Song("",title, artist, akaArray,playedArray);
    console.log(song);
    console.log(url);
    this.http.post(url, song).subscribe(() => {
      console.log("success!");
    }, () => {
      console.log("error!");
    });
    console.log("I'm after the push for create song!");
  }

}
