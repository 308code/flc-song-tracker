import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import {RouterModule, Routes} from "@angular/router";
import {FormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import { PlayedMostRecentlyComponent } from './played-most-recently/played-most-recently.component';
import { PlayedCreateComponent } from './played-create/played-create.component';
import { SongCreateComponent } from './song-create/song-create.component';

const appRoutes: Routes =  [
  { path: '' , component: PlayedMostRecentlyComponent},
  { path: 'songs/played/:id' , component: PlayedCreateComponent},
  { path: 'songs/create', component: SongCreateComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    PlayedMostRecentlyComponent,
    PlayedCreateComponent,
    SongCreateComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
