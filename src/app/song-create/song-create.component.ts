import { Component, OnInit } from '@angular/core';
import {SongService} from "../service/song.service";


@Component({
  selector: 'app-song-create',
  templateUrl: './song-create.component.html',
  styleUrls: ['./song-create.component.css']
})
export class SongCreateComponent implements OnInit {
  seriesLength = Array(70).fill(0,0,69);
  today = new Date();
  constructor(private songService: SongService) { }

  ngOnInit(): void {
  }

  public createNewSong(title: string, artist: string, aka: string){
    this.songService.createSong(title,artist, aka);
  }

}
