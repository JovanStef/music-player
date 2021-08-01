import { AudioController } from "../player-service/audioControler";
import { Button, NextBtn, PlayBtn, PrevBtn } from "../buttons/Button";
import { IMusicPlayer } from "../models/IMusicPlayer";
import { IProgressBar } from "../models/IProgressBar";
import { ISong } from "../models/ISong";
import { ProgressBar } from "../progress-bar/ProgressBar";

export class MusicPlayer implements IMusicPlayer {
  audioController:AudioController
  playBtn: Button;
  nexBtn: Button;
  prevBtn: Button;
  progressBar: IProgressBar;
  songs: ISong[];
  currentSong:ISong


  private IMAGE:HTMLElement | any = document.getElementById('image');
  private TITLE:HTMLElement | any = document.getElementById('title');
  private ARTIST:HTMLElement | any = document.getElementById('artist');

  private MUSIC:HTMLMediaElement | any = document.querySelector('audio');

  private PREV_BTN:HTMLElement | any = document.getElementById('prev');
  private PLAY_BTN:HTMLElement | any = document.getElementById('play');
  private NEXT_BTN:HTMLElement | any = document.getElementById('next');



  constructor(songs:ISong[]){
    this.songs = songs
    this.playBtn = new PlayBtn( this.PLAY_BTN , this)
    this.nexBtn = new NextBtn( this.NEXT_BTN , this)
    this.prevBtn = new PrevBtn( this.PREV_BTN , this)
    this.audioController = new AudioController(this.MUSIC , this.songs);
    this.audioController.isPlaying
    this.currentSong = songs[0];
    this.loadSong()
    this.progressBar = new ProgressBar(this.MUSIC , this.audioController)
  }
playController(){
  const playSong = () =>{
    this.audioController.play()
    this.playBtn.setIcon('fa-pause' , 'Pause')
  }
  const pauseSong = () =>{
    this.audioController.pause()
    this.playBtn.setIcon('fa-play' , 'Play')
  }
  return this.audioController.isPlaying ? pauseSong() : playSong();
}

  prevSong():void{
    this.currentSong = this.audioController.prevSong();
    this.loadSong()
    this.audioController.isPlaying = false;
    this.playBtn.setIcon('fa-play' , 'Play');
  }
  nextSong():void{
    this.currentSong = this.audioController.nextSong();
    this.loadSong()
    this.audioController.isPlaying = false;
    this.playBtn.setIcon('fa-play' , 'Play');
  }
loadSong():void{
  this.TITLE.textContent = this.currentSong.displayName;
  this.ARTIST.textContent = this.currentSong.artist;
  this.TITLE.textContent = this.currentSong.displayName;
  this.MUSIC.src = `music/${this.currentSong.file}`;
  this.IMAGE.src = `img/${this.currentSong.image}`;
}
}