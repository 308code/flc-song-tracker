import { Component, OnInit } from '@angular/core';
import {Song} from "../model/song.model";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  songs: Song[] = [];
  constructor() { }

  ngOnInit(): void {
  }


}
