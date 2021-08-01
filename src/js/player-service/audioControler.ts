import { ISong } from "../models/ISong";

export class AudioController {
  element:HTMLMediaElement;
  songs:ISong[];
  songIdx = 0;
  isPlaying = false;

  constructor(element:HTMLMediaElement , songs:ISong[]){
    this.element = element;
    this.songs = songs;
  }

  play():void{
    this.element.play();
    this.isPlaying = true;
  }
  pause():void{
    this.element.pause();
    this.isPlaying = false;
  }
  prevSong():ISong{
    this.songIdx --;
    if(this.songIdx < 0){
      this.songIdx = this.songs.length -1;
    }
    return this.songs[this.songIdx];
  }
  nextSong():ISong{
    this.songIdx ++;
    if(this.songIdx > this.songs.length -1){
      this.songIdx = 0;
    }
    return this.songs[this.songIdx];

  }

}