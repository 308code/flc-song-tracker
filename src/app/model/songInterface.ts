import {PlayedInterface} from "./playedInterface";

export interface SongInterface {
  id: string;
  title: string;
  artist: string;
  aka: string[];
  played: PlayedInterface[];
}
