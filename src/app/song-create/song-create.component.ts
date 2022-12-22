import {Component, ViewChild} from '@angular/core';
import {SongService} from "../service/song.service";

@Component({
  selector: 'app-song-create',
  templateUrl: './song-create.component.html',
  styleUrls: ['./song-create.component.css']
})
export class SongCreateComponent {
  seriesLength = Array(70).fill(0,0,69);
  today = new Date();

  @ViewChild('series_01') series_01: any;
  @ViewChild('series_02') series_02: any;
  @ViewChild('series_03') series_03: any;
  @ViewChild('series_04') series_04: any;
  @ViewChild('series_05') series_05: any;
  @ViewChild('series_06') series_06: any;
  @ViewChild('series_07') series_07: any;
  @ViewChild('series_08') series_08: any;
  @ViewChild('series_09') series_09: any;
  @ViewChild('series_10') series_10: any;
  @ViewChild('series_11') series_11: any;
  @ViewChild('series_12') series_12: any;
  @ViewChild('series_13') series_13: any;
  @ViewChild('series_14') series_14: any;
  @ViewChild('series_15') series_15: any;
  @ViewChild('series_16') series_16: any;
  @ViewChild('series_17') series_17: any;
  @ViewChild('series_18') series_18: any;
  @ViewChild('series_19') series_19: any;
  @ViewChild('series_20') series_20: any;
  @ViewChild('series_21') series_21: any;
  @ViewChild('series_22') series_22: any;
  @ViewChild('series_23') series_23: any;
  @ViewChild('series_24') series_24: any;
  @ViewChild('series_25') series_25: any;
  @ViewChild('series_26') series_26: any;
  @ViewChild('series_27') series_27: any;
  @ViewChild('series_28') series_28: any;
  @ViewChild('series_29') series_29: any;
  @ViewChild('series_30') series_30: any;
  @ViewChild('series_31') series_31: any;
  @ViewChild('series_32') series_32: any;
  @ViewChild('series_33') series_33: any;
  @ViewChild('series_34') series_34: any;
  @ViewChild('series_35') series_35: any;
  @ViewChild('series_36') series_36: any;
  @ViewChild('series_37') series_37: any;
  @ViewChild('series_38') series_38: any;
  @ViewChild('series_39') series_39: any;
  @ViewChild('series_40') series_40: any;
  @ViewChild('series_41') series_41: any;
  @ViewChild('series_42') series_42: any;
  @ViewChild('series_43') series_43: any;
  @ViewChild('series_44') series_44: any;
  @ViewChild('series_45') series_45: any;
  @ViewChild('series_46') series_46: any;
  @ViewChild('series_47') series_47: any;
  @ViewChild('series_48') series_48: any;
  @ViewChild('series_49') series_49: any;
  @ViewChild('series_50') series_50: any;
  @ViewChild('series_51') series_51: any;
  @ViewChild('series_52') series_52: any;
  @ViewChild('series_53') series_53: any;
  @ViewChild('series_54') series_54: any;
  @ViewChild('series_55') series_55: any;
  @ViewChild('series_56') series_56: any;
  @ViewChild('series_57') series_57: any;
  @ViewChild('series_58') series_58: any;
  @ViewChild('series_59') series_59: any;
  @ViewChild('series_60') series_60: any;
  @ViewChild('series_61') series_61: any;
  @ViewChild('series_62') series_62: any;
  @ViewChild('series_63') series_63: any;
  @ViewChild('series_64') series_64: any;
  @ViewChild('series_65') series_65: any;
  @ViewChild('series_66') series_66: any;
  @ViewChild('series_67') series_67: any;
  @ViewChild('series_68') series_68: any;
  @ViewChild('series_69') series_69: any;
  @ViewChild('series_70') series_70: any;
  constructor(private songService: SongService) { }



  createNewSong(title: string, artist: string, aka: string, note: string, played: any,series_01: string,series_02: string,series_03: string,series_04: string,series_05: string,series_06: string,series_07: string,series_08: string,series_09: string,series_10: string,series_11: string,series_12: string,series_13: string,series_14: string,series_15: string,series_16: string,series_17: string,series_18: string,series_19: string,series_20: string,series_21: string,series_22: string,series_23: string,series_24: string,series_25: string,series_26: string,series_27: string,series_28: string,series_29: string,series_30: string,series_31: string,series_32: string,series_33: string,series_34: string,series_35: string,series_36: string,series_37: string,series_38: string,series_39: string,series_40: string,series_41: string,series_42: string,series_43: string,series_44: string,series_45: string,series_46: string,series_47: string,series_48: string,series_49: string,series_50: string,series_51: string,series_52: string,series_53: string,series_54: string,series_55: string,series_56: string,series_57: string,series_58: string,series_59: string,series_60: string,series_61: string,series_62: string,series_63: string,series_64: string,series_65: string,series_66: string,series_67: string,series_68: string,series_69: string,series_70: string){
    this.songService.createSong(title,artist, aka, note, played,series_01,series_02,series_03,series_04,series_05,series_06,series_07,series_08,series_09,series_10,series_11,series_12,series_13,series_14,series_15,series_16,series_17,series_18,series_19,series_20,series_21,series_22,series_23,series_24,series_25,series_26,series_27,series_28,series_29,series_30,series_31,series_32,series_33,series_34,series_35,series_36,series_37,series_38,series_39,series_40,series_41,series_42,series_43,series_44,series_45,series_46,series_47,series_48,series_49,series_50,series_51,series_52,series_53,series_54,series_55,series_56,series_57,series_58,series_59,series_60,series_61,series_62,series_63,series_64,series_65,series_66,series_67,series_68,series_69,series_70);
  }

}
