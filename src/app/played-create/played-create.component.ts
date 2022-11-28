import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
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
  @ViewChild('series_id_0') series_0: ElementRef | undefined;
  @ViewChild('series_id_1') series_1: ElementRef | undefined;
  @ViewChild('series_id_2') series_2: ElementRef | undefined;
  @ViewChild('series_id_3') series_3: ElementRef | undefined;
  @ViewChild('series_id_4') series_4: ElementRef | undefined;
  @ViewChild('series_id_5') series_5: ElementRef | undefined;
  @ViewChild('series_id_6') series_6: ElementRef | undefined;
  @ViewChild('series_id_7') series_7: ElementRef | undefined;
  @ViewChild('series_id_8') series_8: ElementRef | undefined;
  @ViewChild('series_id_9') series_9: ElementRef | undefined;
  @ViewChild('series_id_10') series_10: ElementRef | undefined;
  @ViewChild('series_id_11') series_11: ElementRef | undefined;
  @ViewChild('series_id_12') series_12: ElementRef | undefined;
  @ViewChild('series_id_13') series_13: ElementRef | undefined;
  @ViewChild('series_id_14') series_14: ElementRef | undefined;
  @ViewChild('series_id_15') series_15: ElementRef | undefined;
  @ViewChild('series_id_16') series_16: ElementRef | undefined;
  @ViewChild('series_id_17') series_17: ElementRef | undefined;
  @ViewChild('series_id_18') series_18: ElementRef | undefined;
  @ViewChild('series_id_19') series_19: ElementRef | undefined;
  @ViewChild('series_id_20') series_20: ElementRef | undefined;
  @ViewChild('series_id_21') series_21: ElementRef | undefined;
  @ViewChild('series_id_22') series_22: ElementRef | undefined;
  @ViewChild('series_id_23') series_23: ElementRef | undefined;
  @ViewChild('series_id_24')series_24: ElementRef | undefined;
  @ViewChild('series_id_25') series_25: ElementRef | undefined;
  @ViewChild('series_id_26') series_26: ElementRef | undefined;
  @ViewChild('series_id_27') series_27: ElementRef | undefined;
  @ViewChild('series_id_28') series_28: ElementRef | undefined;
  @ViewChild('series_id_29') series_29: ElementRef | undefined;
  @ViewChild('series_id_30')series_30: ElementRef | undefined;
  @ViewChild('series_id_31') series_31: ElementRef | undefined;
  @ViewChild('series_id_32') series_32: ElementRef | undefined;
  @ViewChild('series_id_33') series_33: ElementRef | undefined;
  @ViewChild('series_id_34')series_34: ElementRef | undefined;
  @ViewChild('series_id_35') series_35: ElementRef | undefined;
  @ViewChild('series_id_36') series_36: ElementRef | undefined;
  @ViewChild('series_id_37') series_37: ElementRef | undefined;
  @ViewChild('series_id_38') series_38: ElementRef | undefined;
  @ViewChild('series_id_39') series_39: ElementRef | undefined;
  @ViewChild('series_id_40')series_40: ElementRef | undefined;
  @ViewChild('series_id_41') series_41: ElementRef | undefined;
  @ViewChild('series_id_42') series_42: ElementRef | undefined;
  @ViewChild('series_id_43') series_43: ElementRef | undefined;
  @ViewChild('series_id_44')series_44: ElementRef | undefined;
  @ViewChild('series_id_45') series_45: ElementRef | undefined;
  @ViewChild('series_id_46') series_46: ElementRef | undefined;
  @ViewChild('series_id_47') series_47: ElementRef | undefined;
  @ViewChild('series_id_48') series_48: ElementRef | undefined;
  @ViewChild('series_id_49') series_49: ElementRef | undefined;
  @ViewChild('series_id_50')series_50: ElementRef | undefined;
  @ViewChild('series_id_51') series_51: ElementRef | undefined;
  @ViewChild('series_id_52') series_52: ElementRef | undefined;
  @ViewChild('series_id_53') series_53: ElementRef | undefined;
  @ViewChild('series_id_54')series_54: ElementRef | undefined;
  @ViewChild('series_id_55') series_55: ElementRef | undefined;
  @ViewChild('series_id_56') series_56: ElementRef | undefined;
  @ViewChild('series_id_57') series_57: ElementRef | undefined;
  @ViewChild('series_id_58') series_58: ElementRef | undefined;
  @ViewChild('series_id_59') series_59: ElementRef | undefined;
  @ViewChild('series_id_60')series_60: ElementRef | undefined;
  @ViewChild('series_id_61') series_61: ElementRef | undefined;
  @ViewChild('series_id_62') series_62: ElementRef | undefined;
  @ViewChild('series_id_63') series_63: ElementRef | undefined;
  @ViewChild('series_id_64')series_64: ElementRef | undefined;
  @ViewChild('series_id_65') series_65: ElementRef | undefined;
  @ViewChild('series_id_66') series_66: ElementRef | undefined;
  @ViewChild('series_id_67') series_67: ElementRef | undefined;
  @ViewChild('series_id_68') series_68: ElementRef | undefined;
  @ViewChild('series_id_69') series_69: ElementRef | undefined;
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

  private isFirstEntry(incoming: string) : string{
    if(incoming.trim().length > 0){
      return ", ";
    }
    return "";
  }


  updatePlayedEntry(newNote: string, newPlayedDate: any, pos: number){
    let temp : Date = new Date();
    temp.toLocaleString('en-US', { timeZone: 'America/New_York' });
    let tempMonth = parseInt(newPlayedDate.toISOString().slice(5,7)) - 1;
    temp.setFullYear(newPlayedDate.toISOString().slice(0,4),tempMonth,newPlayedDate.toISOString().slice(8,10));
    let newSeries: string = "";
    if(this.series_0?.nativeElement.value.trim().length > 0){
      newSeries = newSeries.concat(this.series_0?.nativeElement.value.trim());
    }
    if(this.series_1?.nativeElement.value.trim().length > 0){
      newSeries = newSeries.concat(this.isFirstEntry(newSeries) +  this.series_1?.nativeElement.value.trim());
    }
    if(this.series_2?.nativeElement.value.trim().length > 0){
      newSeries = newSeries.concat(this.isFirstEntry(newSeries) +  this.series_2?.nativeElement.value.trim());
    }
    if(this.series_3?.nativeElement.value.trim().length > 0){
      newSeries = newSeries.concat(this.isFirstEntry(newSeries) +  this.series_3?.nativeElement.value.trim());
    }
    if(this.series_4?.nativeElement.value.trim().length > 0){
      newSeries = newSeries.concat(this.isFirstEntry(newSeries) +  this.series_4?.nativeElement.value.trim());
    }
    if(this.series_5?.nativeElement.value.trim().length > 0){
      newSeries = newSeries.concat(this.isFirstEntry(newSeries) +  this.series_5?.nativeElement.value.trim());
    }
    if(this.series_6?.nativeElement.value.trim().length > 0){
      newSeries = newSeries.concat(this.isFirstEntry(newSeries) +  this.series_6?.nativeElement.value.trim());
    }
    if(this.series_7?.nativeElement.value.trim().length > 0){
      newSeries = newSeries.concat(this.isFirstEntry(newSeries) +  this.series_7?.nativeElement.value.trim());
    }
    if(this.series_8?.nativeElement.value.trim().length > 0){
      newSeries = newSeries.concat(this.isFirstEntry(newSeries) +  this.series_8?.nativeElement.value.trim());
    }
    if(this.series_9?.nativeElement.value.trim().length > 0){
      newSeries = newSeries.concat(this.isFirstEntry(newSeries) +  this.series_9?.nativeElement.value.trim());
    }
    if(this.series_10?.nativeElement.value.trim().length > 0){
      newSeries = newSeries.concat(this.isFirstEntry(newSeries) +  this.series_10?.nativeElement.value.trim());
    }
    if(this.series_11?.nativeElement.value.trim().length > 0){
      newSeries = newSeries.concat(this.isFirstEntry(newSeries) +  this.series_11?.nativeElement.value.trim());
    }
    if(this.series_12?.nativeElement.value.trim().length > 0){
      newSeries = newSeries.concat(this.isFirstEntry(newSeries) +  this.series_12?.nativeElement.value.trim());
    }
    if(this.series_13?.nativeElement.value.trim().length > 0){
      newSeries = newSeries.concat(this.isFirstEntry(newSeries) +  this.series_13?.nativeElement.value.trim());
    }
    if(this.series_14?.nativeElement.value.trim().length > 0){
      newSeries = newSeries.concat(this.isFirstEntry(newSeries) +  this.series_14?.nativeElement.value.trim());
    }
    if(this.series_15?.nativeElement.value.trim().length > 0){
      newSeries = newSeries.concat(this.isFirstEntry(newSeries) +  this.series_15?.nativeElement.value.trim());
    }
    if(this.series_16?.nativeElement.value.trim().length > 0){
      newSeries = newSeries.concat(this.isFirstEntry(newSeries) +  this.series_16?.nativeElement.value.trim());
    }
    if(this.series_17?.nativeElement.value.trim().length > 0){
      newSeries = newSeries.concat(this.isFirstEntry(newSeries) +  this.series_17?.nativeElement.value.trim());
    }
    if(this.series_18?.nativeElement.value.trim().length > 0){
      newSeries = newSeries.concat(this.isFirstEntry(newSeries) +  this.series_18?.nativeElement.value.trim());
    }
    if(this.series_19?.nativeElement.value.trim().length > 0){
      newSeries = newSeries.concat(this.isFirstEntry(newSeries) +  this.series_19?.nativeElement.value.trim());
    }
    if(this.series_20?.nativeElement.value.trim().length > 0){
      newSeries = newSeries.concat(this.isFirstEntry(newSeries) +  this.series_20?.nativeElement.value.trim());
    }
    if(this.series_21?.nativeElement.value.trim().length > 0){
      newSeries = newSeries.concat(this.isFirstEntry(newSeries) +  this.series_21?.nativeElement.value.trim());
    }
    if(this.series_22?.nativeElement.value.trim().length > 0){
      newSeries = newSeries.concat(this.isFirstEntry(newSeries) +  this.series_22?.nativeElement.value.trim());
    }
    if(this.series_23?.nativeElement.value.trim().length > 0){
      newSeries = newSeries.concat(this.isFirstEntry(newSeries) +  this.series_23?.nativeElement.value.trim());
    }
    if(this.series_24?.nativeElement.value.trim().length > 0){
      newSeries = newSeries.concat(this.isFirstEntry(newSeries) +  this.series_24?.nativeElement.value.trim());
    }
    if(this.series_25?.nativeElement.value.trim().length > 0){
      newSeries = newSeries.concat(this.isFirstEntry(newSeries) +  this.series_25?.nativeElement.value.trim());
    }
    if(this.series_26?.nativeElement.value.trim().length > 0){
      newSeries = newSeries.concat(this.isFirstEntry(newSeries) +  this.series_26?.nativeElement.value.trim());
    }
    if(this.series_27?.nativeElement.value.trim().length > 0){
      newSeries = newSeries.concat(this.isFirstEntry(newSeries) +  this.series_27?.nativeElement.value.trim());
    }
    if(this.series_28?.nativeElement.value.trim().length > 0){
      newSeries = newSeries.concat(this.isFirstEntry(newSeries) +  this.series_28?.nativeElement.value.trim());
    }
    if(this.series_29?.nativeElement.value.trim().length > 0){
      newSeries = newSeries.concat(this.isFirstEntry(newSeries) +  this.series_29?.nativeElement.value.trim());
    }
    if(this.series_30?.nativeElement.value.trim().length > 0){
      newSeries = newSeries.concat(this.isFirstEntry(newSeries) +  this.series_30?.nativeElement.value.trim());
    }
    if(this.series_31?.nativeElement.value.trim().length > 0){
      newSeries = newSeries.concat(this.isFirstEntry(newSeries) +  this.series_31?.nativeElement.value.trim());
    }
    if(this.series_32?.nativeElement.value.trim().length > 0){
      newSeries = newSeries.concat(this.isFirstEntry(newSeries) +  this.series_32?.nativeElement.value.trim());
    }
    if(this.series_33?.nativeElement.value.trim().length > 0){
      newSeries = newSeries.concat(this.isFirstEntry(newSeries) +  this.series_33?.nativeElement.value.trim());
    }
    if(this.series_34?.nativeElement.value.trim().length > 0){
      newSeries = newSeries.concat(this.isFirstEntry(newSeries) +  this.series_34?.nativeElement.value.trim());
    }
    if(this.series_35?.nativeElement.value.trim().length > 0){
      newSeries = newSeries.concat(this.isFirstEntry(newSeries) +  this.series_35?.nativeElement.value.trim());
    }
    if(this.series_36?.nativeElement.value.trim().length > 0){
      newSeries = newSeries.concat(this.isFirstEntry(newSeries) +  this.series_36?.nativeElement.value.trim());
    }
    if(this.series_37?.nativeElement.value.trim().length > 0){
      newSeries = newSeries.concat(this.isFirstEntry(newSeries) +  this.series_37?.nativeElement.value.trim());
    }
    if(this.series_38?.nativeElement.value.trim().length > 0){
      newSeries = newSeries.concat(this.isFirstEntry(newSeries) +  this.series_38?.nativeElement.value.trim());
    }
    if(this.series_39?.nativeElement.value.trim().length > 0){
      newSeries = newSeries.concat(this.isFirstEntry(newSeries) +  this.series_39?.nativeElement.value.trim());
    }
    if(this.series_40?.nativeElement.value.trim().length > 0){
      newSeries = newSeries.concat(this.isFirstEntry(newSeries) +  this.series_40?.nativeElement.value.trim());
    }
    if(this.series_41?.nativeElement.value.trim().length > 0){
      newSeries = newSeries.concat(this.isFirstEntry(newSeries) +  this.series_41?.nativeElement.value.trim());
    }
    if(this.series_42?.nativeElement.value.trim().length > 0){
      newSeries = newSeries.concat(this.isFirstEntry(newSeries) +  this.series_42?.nativeElement.value.trim());
    }
    if(this.series_43?.nativeElement.value.trim().length > 0){
      newSeries = newSeries.concat(this.isFirstEntry(newSeries) +  this.series_43?.nativeElement.value.trim());
    }
    if(this.series_44?.nativeElement.value.trim().length > 0){
      newSeries = newSeries.concat(this.isFirstEntry(newSeries) +  this.series_44?.nativeElement.value.trim());
    }
    if(this.series_45?.nativeElement.value.trim().length > 0){
      newSeries = newSeries.concat(this.isFirstEntry(newSeries) +  this.series_45?.nativeElement.value.trim());
    }
    if(this.series_46?.nativeElement.value.trim().length > 0){
      newSeries = newSeries.concat(this.isFirstEntry(newSeries) +  this.series_46?.nativeElement.value.trim());
    }
    if(this.series_47?.nativeElement.value.trim().length > 0){
      newSeries = newSeries.concat(this.isFirstEntry(newSeries) +  this.series_47?.nativeElement.value.trim());
    }
    if(this.series_48?.nativeElement.value.trim().length > 0){
      newSeries = newSeries.concat(this.isFirstEntry(newSeries) +  this.series_48?.nativeElement.value.trim());
    }
    if(this.series_49?.nativeElement.value.trim().length > 0){
      newSeries = newSeries.concat(this.isFirstEntry(newSeries) +  this.series_49?.nativeElement.value.trim());
    }
    if(this.series_50?.nativeElement.value.trim().length > 0){
      newSeries = newSeries.concat(this.isFirstEntry(newSeries) +  this.series_50?.nativeElement.value.trim());
    }
    if(this.series_51?.nativeElement.value.trim().length > 0){
      newSeries = newSeries.concat(this.isFirstEntry(newSeries) +  this.series_51?.nativeElement.value.trim());
    }
    if(this.series_52?.nativeElement.value.trim().length > 0){
      newSeries = newSeries.concat(this.isFirstEntry(newSeries) +  this.series_52?.nativeElement.value.trim());
    }
    if(this.series_53?.nativeElement.value.trim().length > 0){
      newSeries = newSeries.concat(this.isFirstEntry(newSeries) +  this.series_53?.nativeElement.value.trim());
    }
    if(this.series_54?.nativeElement.value.trim().length > 0){
      newSeries = newSeries.concat(this.isFirstEntry(newSeries) +  this.series_54?.nativeElement.value.trim());
    }
    if(this.series_55?.nativeElement.value.trim().length > 0){
      newSeries = newSeries.concat(this.isFirstEntry(newSeries) +  this.series_55?.nativeElement.value.trim());
    }
    if(this.series_56?.nativeElement.value.trim().length > 0){
      newSeries = newSeries.concat(this.isFirstEntry(newSeries) +  this.series_56?.nativeElement.value.trim());
    }
    if(this.series_57?.nativeElement.value.trim().length > 0){
      newSeries = newSeries.concat(this.isFirstEntry(newSeries) +  this.series_57?.nativeElement.value.trim());
    }
    if(this.series_58?.nativeElement.value.trim().length > 0){
      newSeries = newSeries.concat(this.isFirstEntry(newSeries) +  this.series_58?.nativeElement.value.trim());
    }
    if(this.series_59?.nativeElement.value.trim().length > 0){
      newSeries = newSeries.concat(this.isFirstEntry(newSeries) +  this.series_59?.nativeElement.value.trim());
    }
    if(this.series_60?.nativeElement.value.trim().length > 0){
      newSeries = newSeries.concat(this.isFirstEntry(newSeries) +  this.series_60?.nativeElement.value.trim());
    }
    if(this.series_61?.nativeElement.value.trim().length > 0){
      newSeries = newSeries.concat(this.isFirstEntry(newSeries) +  this.series_61?.nativeElement.value.trim());
    }
    if(this.series_62?.nativeElement.value.trim().length > 0){
      newSeries = newSeries.concat(this.isFirstEntry(newSeries) +  this.series_62?.nativeElement.value.trim());
    }
    if(this.series_63?.nativeElement.value.trim().length > 0){
      newSeries = newSeries.concat(this.isFirstEntry(newSeries) +  this.series_63?.nativeElement.value.trim());
    }
    if(this.series_64?.nativeElement.value.trim().length > 0){
      newSeries = newSeries.concat(this.isFirstEntry(newSeries) +  this.series_64?.nativeElement.value.trim());
    }
    if(this.series_65?.nativeElement.value.trim().length > 0){
      newSeries = newSeries.concat(this.isFirstEntry(newSeries) +  this.series_65?.nativeElement.value.trim());
    }
    if(this.series_66?.nativeElement.value.trim().length > 0){
      newSeries = newSeries.concat(this.isFirstEntry(newSeries) +  this.series_66?.nativeElement.value.trim());
    }
    if(this.series_67?.nativeElement.value.trim().length > 0){
      newSeries = newSeries.concat(this.isFirstEntry(newSeries) +  this.series_67?.nativeElement.value.trim());
    }
    if(this.series_68?.nativeElement.value.trim().length > 0){
      newSeries = newSeries.concat(this.isFirstEntry(newSeries) +  this.series_68?.nativeElement.value.trim());
    }
    if(this.series_69?.nativeElement.value.trim().length > 0){
      newSeries = newSeries.concat(this.isFirstEntry(newSeries) +  this.series_69?.nativeElement.value.trim());
    }

    this.song.getPlayed()[pos] = new Played(temp.toISOString().slice(0,10),newNote,newSeries);
    this.songService.updateSong(this.song);
  }

  createNewPlayedEntry(newNote: string, newPlayedDate: any){
    let temp : Date = new Date();
    temp.toLocaleString('en-US', { timeZone: 'America/New_York' });
    let tempMonth = parseInt(newPlayedDate.toISOString().slice(5,7)) - 1;
    temp.setFullYear(newPlayedDate.toISOString().slice(0,4),tempMonth,newPlayedDate.toISOString().slice(8,10));
    let newSeries: string = "";
    if(this.series_0?.nativeElement.value.trim().length > 0){
      newSeries = newSeries.concat(this.series_0?.nativeElement.value.trim());
    }
    if(this.series_1?.nativeElement.value.trim().length > 0){
      newSeries = newSeries.concat(this.isFirstEntry(newSeries) +  this.series_1?.nativeElement.value.trim());
    }
    if(this.series_2?.nativeElement.value.trim().length > 0){
      newSeries = newSeries.concat(this.isFirstEntry(newSeries) +  this.series_2?.nativeElement.value.trim());
    }
    if(this.series_3?.nativeElement.value.trim().length > 0){
      newSeries = newSeries.concat(this.isFirstEntry(newSeries) +  this.series_3?.nativeElement.value.trim());
    }
    if(this.series_4?.nativeElement.value.trim().length > 0){
      newSeries = newSeries.concat(this.isFirstEntry(newSeries) +  this.series_4?.nativeElement.value.trim());
    }
    if(this.series_5?.nativeElement.value.trim().length > 0){
      newSeries = newSeries.concat(this.isFirstEntry(newSeries) +  this.series_5?.nativeElement.value.trim());
    }
    if(this.series_6?.nativeElement.value.trim().length > 0){
      newSeries = newSeries.concat(this.isFirstEntry(newSeries) +  this.series_6?.nativeElement.value.trim());
    }
    if(this.series_7?.nativeElement.value.trim().length > 0){
      newSeries = newSeries.concat(this.isFirstEntry(newSeries) +  this.series_7?.nativeElement.value.trim());
    }
    if(this.series_8?.nativeElement.value.trim().length > 0){
      newSeries = newSeries.concat(this.isFirstEntry(newSeries) +  this.series_8?.nativeElement.value.trim());
    }
    if(this.series_9?.nativeElement.value.trim().length > 0){
      newSeries = newSeries.concat(this.isFirstEntry(newSeries) +  this.series_9?.nativeElement.value.trim());
    }
    if(this.series_10?.nativeElement.value.trim().length > 0){
      newSeries = newSeries.concat(this.isFirstEntry(newSeries) +  this.series_10?.nativeElement.value.trim());
    }
    if(this.series_11?.nativeElement.value.trim().length > 0){
      newSeries = newSeries.concat(this.isFirstEntry(newSeries) +  this.series_11?.nativeElement.value.trim());
    }
    if(this.series_12?.nativeElement.value.trim().length > 0){
      newSeries = newSeries.concat(this.isFirstEntry(newSeries) +  this.series_12?.nativeElement.value.trim());
    }
    if(this.series_13?.nativeElement.value.trim().length > 0){
      newSeries = newSeries.concat(this.isFirstEntry(newSeries) +  this.series_13?.nativeElement.value.trim());
    }
    if(this.series_14?.nativeElement.value.trim().length > 0){
      newSeries = newSeries.concat(this.isFirstEntry(newSeries) +  this.series_14?.nativeElement.value.trim());
    }
    if(this.series_15?.nativeElement.value.trim().length > 0){
      newSeries = newSeries.concat(this.isFirstEntry(newSeries) +  this.series_15?.nativeElement.value.trim());
    }
    if(this.series_16?.nativeElement.value.trim().length > 0){
      newSeries = newSeries.concat(this.isFirstEntry(newSeries) +  this.series_16?.nativeElement.value.trim());
    }
    if(this.series_17?.nativeElement.value.trim().length > 0){
      newSeries = newSeries.concat(this.isFirstEntry(newSeries) +  this.series_17?.nativeElement.value.trim());
    }
    if(this.series_18?.nativeElement.value.trim().length > 0){
      newSeries = newSeries.concat(this.isFirstEntry(newSeries) +  this.series_18?.nativeElement.value.trim());
    }
    if(this.series_19?.nativeElement.value.trim().length > 0){
      newSeries = newSeries.concat(this.isFirstEntry(newSeries) +  this.series_19?.nativeElement.value.trim());
    }
    if(this.series_20?.nativeElement.value.trim().length > 0){
      newSeries = newSeries.concat(this.isFirstEntry(newSeries) +  this.series_20?.nativeElement.value.trim());
    }
    if(this.series_21?.nativeElement.value.trim().length > 0){
      newSeries = newSeries.concat(this.isFirstEntry(newSeries) +  this.series_21?.nativeElement.value.trim());
    }
    if(this.series_22?.nativeElement.value.trim().length > 0){
      newSeries = newSeries.concat(this.isFirstEntry(newSeries) +  this.series_22?.nativeElement.value.trim());
    }
    if(this.series_23?.nativeElement.value.trim().length > 0){
      newSeries = newSeries.concat(this.isFirstEntry(newSeries) +  this.series_23?.nativeElement.value.trim());
    }
    if(this.series_24?.nativeElement.value.trim().length > 0){
      newSeries = newSeries.concat(this.isFirstEntry(newSeries) +  this.series_24?.nativeElement.value.trim());
    }
    if(this.series_25?.nativeElement.value.trim().length > 0){
      newSeries = newSeries.concat(this.isFirstEntry(newSeries) +  this.series_25?.nativeElement.value.trim());
    }
    if(this.series_26?.nativeElement.value.trim().length > 0){
      newSeries = newSeries.concat(this.isFirstEntry(newSeries) +  this.series_26?.nativeElement.value.trim());
    }
    if(this.series_27?.nativeElement.value.trim().length > 0){
      newSeries = newSeries.concat(this.isFirstEntry(newSeries) +  this.series_27?.nativeElement.value.trim());
    }
    if(this.series_28?.nativeElement.value.trim().length > 0){
      newSeries = newSeries.concat(this.isFirstEntry(newSeries) +  this.series_28?.nativeElement.value.trim());
    }
    if(this.series_29?.nativeElement.value.trim().length > 0){
      newSeries = newSeries.concat(this.isFirstEntry(newSeries) +  this.series_29?.nativeElement.value.trim());
    }
    if(this.series_30?.nativeElement.value.trim().length > 0){
      newSeries = newSeries.concat(this.isFirstEntry(newSeries) +  this.series_30?.nativeElement.value.trim());
    }
    if(this.series_31?.nativeElement.value.trim().length > 0){
      newSeries = newSeries.concat(this.isFirstEntry(newSeries) +  this.series_31?.nativeElement.value.trim());
    }
    if(this.series_32?.nativeElement.value.trim().length > 0){
      newSeries = newSeries.concat(this.isFirstEntry(newSeries) +  this.series_32?.nativeElement.value.trim());
    }
    if(this.series_33?.nativeElement.value.trim().length > 0){
      newSeries = newSeries.concat(this.isFirstEntry(newSeries) +  this.series_33?.nativeElement.value.trim());
    }
    if(this.series_34?.nativeElement.value.trim().length > 0){
      newSeries = newSeries.concat(this.isFirstEntry(newSeries) +  this.series_34?.nativeElement.value.trim());
    }
    if(this.series_35?.nativeElement.value.trim().length > 0){
      newSeries = newSeries.concat(this.isFirstEntry(newSeries) +  this.series_35?.nativeElement.value.trim());
    }
    if(this.series_36?.nativeElement.value.trim().length > 0){
      newSeries = newSeries.concat(this.isFirstEntry(newSeries) +  this.series_36?.nativeElement.value.trim());
    }
    if(this.series_37?.nativeElement.value.trim().length > 0){
      newSeries = newSeries.concat(this.isFirstEntry(newSeries) +  this.series_37?.nativeElement.value.trim());
    }
    if(this.series_38?.nativeElement.value.trim().length > 0){
      newSeries = newSeries.concat(this.isFirstEntry(newSeries) +  this.series_38?.nativeElement.value.trim());
    }
    if(this.series_39?.nativeElement.value.trim().length > 0){
      newSeries = newSeries.concat(this.isFirstEntry(newSeries) +  this.series_39?.nativeElement.value.trim());
    }
    if(this.series_40?.nativeElement.value.trim().length > 0){
      newSeries = newSeries.concat(this.isFirstEntry(newSeries) +  this.series_40?.nativeElement.value.trim());
    }
    if(this.series_41?.nativeElement.value.trim().length > 0){
      newSeries = newSeries.concat(this.isFirstEntry(newSeries) +  this.series_41?.nativeElement.value.trim());
    }
    if(this.series_42?.nativeElement.value.trim().length > 0){
      newSeries = newSeries.concat(this.isFirstEntry(newSeries) +  this.series_42?.nativeElement.value.trim());
    }
    if(this.series_43?.nativeElement.value.trim().length > 0){
      newSeries = newSeries.concat(this.isFirstEntry(newSeries) +  this.series_43?.nativeElement.value.trim());
    }
    if(this.series_44?.nativeElement.value.trim().length > 0){
      newSeries = newSeries.concat(this.isFirstEntry(newSeries) +  this.series_44?.nativeElement.value.trim());
    }
    if(this.series_45?.nativeElement.value.trim().length > 0){
      newSeries = newSeries.concat(this.isFirstEntry(newSeries) +  this.series_45?.nativeElement.value.trim());
    }
    if(this.series_46?.nativeElement.value.trim().length > 0){
      newSeries = newSeries.concat(this.isFirstEntry(newSeries) +  this.series_46?.nativeElement.value.trim());
    }
    if(this.series_47?.nativeElement.value.trim().length > 0){
      newSeries = newSeries.concat(this.isFirstEntry(newSeries) +  this.series_47?.nativeElement.value.trim());
    }
    if(this.series_48?.nativeElement.value.trim().length > 0){
      newSeries = newSeries.concat(this.isFirstEntry(newSeries) +  this.series_48?.nativeElement.value.trim());
    }
    if(this.series_49?.nativeElement.value.trim().length > 0){
      newSeries = newSeries.concat(this.isFirstEntry(newSeries) +  this.series_49?.nativeElement.value.trim());
    }
    if(this.series_50?.nativeElement.value.trim().length > 0){
      newSeries = newSeries.concat(this.isFirstEntry(newSeries) +  this.series_50?.nativeElement.value.trim());
    }
    if(this.series_51?.nativeElement.value.trim().length > 0){
      newSeries = newSeries.concat(this.isFirstEntry(newSeries) +  this.series_51?.nativeElement.value.trim());
    }
    if(this.series_52?.nativeElement.value.trim().length > 0){
      newSeries = newSeries.concat(this.isFirstEntry(newSeries) +  this.series_52?.nativeElement.value.trim());
    }
    if(this.series_53?.nativeElement.value.trim().length > 0){
      newSeries = newSeries.concat(this.isFirstEntry(newSeries) +  this.series_53?.nativeElement.value.trim());
    }
    if(this.series_54?.nativeElement.value.trim().length > 0){
      newSeries = newSeries.concat(this.isFirstEntry(newSeries) +  this.series_54?.nativeElement.value.trim());
    }
    if(this.series_55?.nativeElement.value.trim().length > 0){
      newSeries = newSeries.concat(this.isFirstEntry(newSeries) +  this.series_55?.nativeElement.value.trim());
    }
    if(this.series_56?.nativeElement.value.trim().length > 0){
      newSeries = newSeries.concat(this.isFirstEntry(newSeries) +  this.series_56?.nativeElement.value.trim());
    }
    if(this.series_57?.nativeElement.value.trim().length > 0){
      newSeries = newSeries.concat(this.isFirstEntry(newSeries) +  this.series_57?.nativeElement.value.trim());
    }
    if(this.series_58?.nativeElement.value.trim().length > 0){
      newSeries = newSeries.concat(this.isFirstEntry(newSeries) +  this.series_58?.nativeElement.value.trim());
    }
    if(this.series_59?.nativeElement.value.trim().length > 0){
      newSeries = newSeries.concat(this.isFirstEntry(newSeries) +  this.series_59?.nativeElement.value.trim());
    }
    if(this.series_60?.nativeElement.value.trim().length > 0){
      newSeries = newSeries.concat(this.isFirstEntry(newSeries) +  this.series_60?.nativeElement.value.trim());
    }
    if(this.series_61?.nativeElement.value.trim().length > 0){
      newSeries = newSeries.concat(this.isFirstEntry(newSeries) +  this.series_61?.nativeElement.value.trim());
    }
    if(this.series_62?.nativeElement.value.trim().length > 0){
      newSeries = newSeries.concat(this.isFirstEntry(newSeries) +  this.series_62?.nativeElement.value.trim());
    }
    if(this.series_63?.nativeElement.value.trim().length > 0){
      newSeries = newSeries.concat(this.isFirstEntry(newSeries) +  this.series_63?.nativeElement.value.trim());
    }
    if(this.series_64?.nativeElement.value.trim().length > 0){
      newSeries = newSeries.concat(this.isFirstEntry(newSeries) +  this.series_64?.nativeElement.value.trim());
    }
    if(this.series_65?.nativeElement.value.trim().length > 0){
      newSeries = newSeries.concat(this.isFirstEntry(newSeries) +  this.series_65?.nativeElement.value.trim());
    }
    if(this.series_66?.nativeElement.value.trim().length > 0){
      newSeries = newSeries.concat(this.isFirstEntry(newSeries) +  this.series_66?.nativeElement.value.trim());
    }
    if(this.series_67?.nativeElement.value.trim().length > 0){
      newSeries = newSeries.concat(this.isFirstEntry(newSeries) +  this.series_67?.nativeElement.value.trim());
    }
    if(this.series_68?.nativeElement.value.trim().length > 0){
      newSeries = newSeries.concat(this.isFirstEntry(newSeries) +  this.series_68?.nativeElement.value.trim());
    }
    if(this.series_69?.nativeElement.value.trim().length > 0){
      newSeries = newSeries.concat(this.isFirstEntry(newSeries) +  this.series_69?.nativeElement.value.trim());
    }

    // this.series?.forEach((value, i) => {
    //   if(value.nativeElement.value.length>0) {
    //     if(i > 0 && value.nativeElement.value.trim().length > 0) {
    //       newSeries = newSeries.concat(", ");
    //     }
    //     newSeries = newSeries.concat(value.nativeElement.value.trim());
    //   }
    // });
    this.song.getPlayed().push(new Played(temp.toISOString().slice(0,10),newNote,newSeries));
    this.songService.updateSong(this.song);
  }
}
