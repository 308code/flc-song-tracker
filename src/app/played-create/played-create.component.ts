import {Component, ElementRef, OnInit, QueryList, ViewChildren} from '@angular/core';
import {Song} from "../model/song.model";
import {SongService} from "../service/song.service";
import {ActivatedRoute} from "@angular/router";
import {Played} from "../model/played.model";

@Component({
  selector: 'app-played-create',
  templateUrl: './played-create.component.html',
  styleUrls: ['./played-create.component.css']
})
export class PlayedCreateComponent implements OnInit {
  private ARRAY_SIZE = 70;
  selectedPlayedSong : number = 0;
  today = new Date();
  song: Song = new Song();
  selectedSeries: string[] = [...Array(this.ARRAY_SIZE)].map( () => '');
  notes: string = "";
  playedDate: Date = new Date();
  position = [ ...Array(this.ARRAY_SIZE)];

  @ViewChildren('series_id') series: QueryList<ElementRef> | undefined;
  constructor(private songService: SongService, private route: ActivatedRoute) {
    this.today.toLocaleString('en-US', { timeZone: 'America/New_York' });
    this.playedDate.toLocaleString('en-US', { timeZone: 'America/New_York' });
  }

  ngOnInit(): void {
    this.songService.getSongById(this.route.snapshot.params['id']).subscribe( song => {
      this.song = song;
      if(this.song.getPlayed().length > 0){
        this.updateSeries(0);
      }
      });
  }

  updateSeries(pos: number){
    this.selectedPlayedSong = pos;
    this.parseSeries(this.song.getPlayed()[pos].getSeries());
    this.notes = this.song.getPlayed()[pos].getNotes();
    this.playedDate = this.song.getPlayed()[pos].getDatePlayed();
  }

  private parseSeries(series: string){
    this.selectedSeries = [];
    this.selectedSeries.length = this.ARRAY_SIZE;
    this.selectedSeries.map( () => "")
    let temp  = series.split(',');
    temp.forEach((value, i) => {
      this.selectedSeries[i] = value.trim();
    });
    for(let i=temp.length;i<this.ARRAY_SIZE;i++){
      this.selectedSeries[i] = "";
    }
  }

  deletePlayedEntry(pos: number){
    console.log("POS = " + pos);
    console.log("BEFORE = " + JSON.stringify(this.song.getPlayed()));
    this.song.getPlayed().splice(pos,1);
    console.log(" AFTER = " + JSON.stringify(this.song.getPlayed()));
    this.songService.updateSong(this.song);
  }

  updatePlayedEntry(newNote: string, newPlayedDate: any, pos: number){
    let temp : Date = new Date();
    temp.toLocaleString('en-US', { timeZone: 'America/New_York' });
    let tempMonth = parseInt(newPlayedDate.toISOString().slice(5,7)) - 1;
    temp.setFullYear(newPlayedDate.toISOString().slice(0,4),tempMonth,newPlayedDate.toISOString().slice(8,10));
    let newSeries: string = "";
    this.series?.forEach((value, i) => {
      if(value.nativeElement.value.length>0) {
        if(i > 0 && value.nativeElement.value.trim().length > 0) {
          newSeries = newSeries.concat(", ");
        }
        newSeries = newSeries.concat(value.nativeElement.value.trim());
      }
    });
    this.song.getPlayed()[pos] = new Played(temp.toISOString().slice(0,10),newNote,newSeries);
    this.songService.updateSong(this.song);
  }

  createNewPlayedEntry(newNote: string, newPlayedDate: any){
    let temp : Date = new Date();
    temp.toLocaleString('en-US', { timeZone: 'America/New_York' });
    let tempMonth = parseInt(newPlayedDate.toISOString().slice(5,7)) - 1;
    temp.setFullYear(newPlayedDate.toISOString().slice(0,4),tempMonth,newPlayedDate.toISOString().slice(8,10));
    let newSeries: string = "";
    this.series?.forEach((value, i) => {
      if(value.nativeElement.value.length>0) {
        if(i > 0 && value.nativeElement.value.trim().length > 0) {
          newSeries = newSeries.concat(", ");
        }
        newSeries = newSeries.concat(value.nativeElement.value.trim());
      }
    });
    this.song.getPlayed().push(new Played(temp.toISOString().slice(0,10),newNote,newSeries));
    this.songService.updateSong(this.song);
  }
}
