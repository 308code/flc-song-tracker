import {Component, OnInit, ViewChild} from '@angular/core';
import {SongService} from "../service/song.service";
import {Song} from "../model/song.model";

@Component({
  selector: 'app-played-most-recently',
  templateUrl: './played-most-recently.component.html',
  styleUrls: ['./played-most-recently.component.css']
})
export class PlayedMostRecentlyComponent implements OnInit {
  public songs: Song[] = [];
  public artist: string = "";
  public title: string = "";
  fromDate: Date;
  toDate: Date;
  @ViewChild('a') artistInput: any;
  @ViewChild('t') titleInput: any;

  constructor(private songService: SongService) {
    this.fromDate = new Date();
    this.fromDate.setFullYear(this.fromDate.getFullYear()-1);
    this.toDate = new Date();
  }

  ngOnInit(): void {
    this.title = "";
    this.artist = "";
    this.songService.getAllSongsByLastPlayed().subscribe(sortedSongs => {
      this.songs = sortedSongs;
    });
  }

  filterByDate(from: any, to: any) {
    this.artist = '';
    this.title = '';
    this.songService.getAllSongsWithinDates(from,to).subscribe(sortedSongs => {
      this.songs = sortedSongs;
    });
    this.artistInput.nativeElement.value = '';
    this.titleInput.nativeElement.value = '';
  }

  filterByTitle(title: string) {

    this.songService.getSongByTitle(title).subscribe(sortedSongs => {
      this.artist = '';
      this.songs = sortedSongs;
    });
    this.artistInput.nativeElement.value = '';
  }

  filterByArtist(artist: string) {
    this.songService.getSongsByArtist(artist).subscribe(sortedSongs => {
      this.songs = sortedSongs;
      this.title = '';
    });
    this.titleInput.nativeElement.value = '';
  }
}
