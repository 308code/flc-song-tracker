import { Component, OnInit } from '@angular/core';
import {SongService} from "../service/song.service";
import {Song} from "../model/song.model";

@Component({
  selector: 'app-played-most-recently',
  templateUrl: './played-most-recently.component.html',
  styleUrls: ['./played-most-recently.component.css']
})
export class PlayedMostRecentlyComponent implements OnInit {
  public songs: Song[] = [];
  constructor(private songService: SongService) { }

  ngOnInit(): void {
    this.songService.getAllSongsByLastPlayed().subscribe(sortedSongs => {
      this.songs = sortedSongs;
    });
  }

}
