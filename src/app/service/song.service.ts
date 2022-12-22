import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {map, Observable} from "rxjs";
import {Song} from "../model/song.model";
import {environment} from "../../environments/environment";
import {Played} from "../model/played.model";
import {SongInterface} from "../model/songInterface";
import {Router} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class SongService {
  constructor(private http: HttpClient , private router: Router) { }

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

  // public createSong(title: string, artist: string, aka : string) {
  //   let url = 'http://' + environment.host + ':' + environment.restApiPort + '/api/songs';
  //   console.log("url = " + url);
  //   let akaArray = aka.split(",");
  //   let playedArray : Played[] = [];
  //   let song = new Song("",title, artist, akaArray,playedArray);
  //   console.log(song);
  //   console.log(url);
  //   this.http.post(url, song).subscribe(() => {
  //     console.log("success!");
  //   }, () => {
  //     console.log("error!");
  //   });
  //   console.log("I'm after the push for create song!");
  // }

  public createSong(title: string, artist: string, aka : string, note: string, played: Date,ser_01: string,ser_02: string,
                    ser_03: string,ser_04: string,ser_05: string,ser_06: string,ser_07: string,ser_08: string,ser_09: string,
                    ser_10: string,ser_11: string,ser_12: string,ser_13: string,ser_14: string,ser_15: string,ser_16: string,
                    ser_17: string,ser_18: string,ser_19: string,ser_20: string,ser_21: string,ser_22: string,ser_23: string,
                    ser_24: string,ser_25: string,ser_26: string,ser_27: string,ser_28: string,ser_29: string,ser_30: string,
                    ser_31: string,ser_32: string,ser_33: string,ser_34: string,ser_35: string,ser_36: string,ser_37: string,
                    ser_38: string,ser_39: string,ser_40: string,ser_41: string,ser_42: string,ser_43: string,ser_44: string,
                    ser_45: string,ser_46: string,ser_47: string,ser_48: string,ser_49: string,ser_50: string,ser_51: string,
                    ser_52: string,ser_53: string,ser_54: string,ser_55: string,ser_56: string,ser_57: string,ser_58: string,
                    ser_59: string,ser_60: string,ser_61: string,ser_62: string,ser_63: string,ser_64: string,ser_65: string,
                    ser_66: string,ser_67: string,ser_68: string,ser_69: string,ser_70: string) {
    let url = 'http://' + environment.host + ':' + environment.restApiPort + '/api/songs';
    let akaArray = aka.split(",");

    let tempSeries : string = "";

    tempSeries = this.prepSeriesString(tempSeries,ser_01);
    tempSeries = this.prepSeriesString(tempSeries,ser_02);
    tempSeries = this.prepSeriesString(tempSeries,ser_03);
    tempSeries = this.prepSeriesString(tempSeries,ser_04);
    tempSeries = this.prepSeriesString(tempSeries,ser_05);
    tempSeries = this.prepSeriesString(tempSeries,ser_06);
    tempSeries = this.prepSeriesString(tempSeries,ser_07);
    tempSeries = this.prepSeriesString(tempSeries,ser_08);
    tempSeries = this.prepSeriesString(tempSeries,ser_09);
    tempSeries = this.prepSeriesString(tempSeries,ser_10);
    tempSeries = this.prepSeriesString(tempSeries,ser_11);
    tempSeries = this.prepSeriesString(tempSeries,ser_12);
    tempSeries = this.prepSeriesString(tempSeries,ser_13);
    tempSeries = this.prepSeriesString(tempSeries,ser_14);
    tempSeries = this.prepSeriesString(tempSeries,ser_15);
    tempSeries = this.prepSeriesString(tempSeries,ser_16);
    tempSeries = this.prepSeriesString(tempSeries,ser_17);
    tempSeries = this.prepSeriesString(tempSeries,ser_18);
    tempSeries = this.prepSeriesString(tempSeries,ser_19);
    tempSeries = this.prepSeriesString(tempSeries,ser_20);
    tempSeries = this.prepSeriesString(tempSeries,ser_21);
    tempSeries = this.prepSeriesString(tempSeries,ser_22);
    tempSeries = this.prepSeriesString(tempSeries,ser_23);
    tempSeries = this.prepSeriesString(tempSeries,ser_24);
    tempSeries = this.prepSeriesString(tempSeries,ser_25);
    tempSeries = this.prepSeriesString(tempSeries,ser_26);
    tempSeries = this.prepSeriesString(tempSeries,ser_27);
    tempSeries = this.prepSeriesString(tempSeries,ser_28);
    tempSeries = this.prepSeriesString(tempSeries,ser_29);
    tempSeries = this.prepSeriesString(tempSeries,ser_30);
    tempSeries = this.prepSeriesString(tempSeries,ser_31);
    tempSeries = this.prepSeriesString(tempSeries,ser_32);
    tempSeries = this.prepSeriesString(tempSeries,ser_33);
    tempSeries = this.prepSeriesString(tempSeries,ser_34);
    tempSeries = this.prepSeriesString(tempSeries,ser_35);
    tempSeries = this.prepSeriesString(tempSeries,ser_36);
    tempSeries = this.prepSeriesString(tempSeries,ser_37);
    tempSeries = this.prepSeriesString(tempSeries,ser_38);
    tempSeries = this.prepSeriesString(tempSeries,ser_39);
    tempSeries = this.prepSeriesString(tempSeries,ser_40);
    tempSeries = this.prepSeriesString(tempSeries,ser_41);
    tempSeries = this.prepSeriesString(tempSeries,ser_42);
    tempSeries = this.prepSeriesString(tempSeries,ser_43);
    tempSeries = this.prepSeriesString(tempSeries,ser_44);
    tempSeries = this.prepSeriesString(tempSeries,ser_45);
    tempSeries = this.prepSeriesString(tempSeries,ser_46);
    tempSeries = this.prepSeriesString(tempSeries,ser_47);
    tempSeries = this.prepSeriesString(tempSeries,ser_48);
    tempSeries = this.prepSeriesString(tempSeries,ser_49);
    tempSeries = this.prepSeriesString(tempSeries,ser_50);
    tempSeries = this.prepSeriesString(tempSeries,ser_51);
    tempSeries = this.prepSeriesString(tempSeries,ser_52);
    tempSeries = this.prepSeriesString(tempSeries,ser_53);
    tempSeries = this.prepSeriesString(tempSeries,ser_54);
    tempSeries = this.prepSeriesString(tempSeries,ser_55);
    tempSeries = this.prepSeriesString(tempSeries,ser_56);
    tempSeries = this.prepSeriesString(tempSeries,ser_57);
    tempSeries = this.prepSeriesString(tempSeries,ser_58);
    tempSeries = this.prepSeriesString(tempSeries,ser_59);
    tempSeries = this.prepSeriesString(tempSeries,ser_60);
    tempSeries = this.prepSeriesString(tempSeries,ser_61);
    tempSeries = this.prepSeriesString(tempSeries,ser_62);
    tempSeries = this.prepSeriesString(tempSeries,ser_63);
    tempSeries = this.prepSeriesString(tempSeries,ser_64);
    tempSeries = this.prepSeriesString(tempSeries,ser_65);
    tempSeries = this.prepSeriesString(tempSeries,ser_66);
    tempSeries = this.prepSeriesString(tempSeries,ser_67);
    tempSeries = this.prepSeriesString(tempSeries,ser_68);
    tempSeries = this.prepSeriesString(tempSeries,ser_69);
    tempSeries = this.prepSeriesString(tempSeries,ser_70);
    let playedArray : Played[] = [];
    let tempPlayed = new Played(played.toISOString().slice(0,10),note,tempSeries);
    playedArray.push(tempPlayed);
    let song = new Song("",title, artist, akaArray,playedArray);
    this.http.post(url, song).subscribe(() => {
      console.log("success creating song!");
      this.router.navigate(['/'])
        .then(()=>{
          window.location.reload();
        });
    }, () => {
      console.log("error creating song!");
      this.router.navigate(['/'])
        .then(()=>{
          window.location.reload();
        });
    });
    console.log("I'm after the push for create song!");
  }
  private prepSeriesString(tempSeries: string, seriesEntry: string): string{
    if(seriesEntry){
      if(tempSeries.length>0){
        tempSeries = tempSeries + ", " + seriesEntry;
      }else{
        tempSeries = seriesEntry;
      }
    }
    return tempSeries;
  }

}
