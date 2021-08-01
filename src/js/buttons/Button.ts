import { IButton, IPlayBtn } from "../models/IButton";
import { MusicPlayer } from "../music-player/Music-player";

export class Button implements IButton{
  public icon = ''
  public element:HTMLElement
  public musicPlayer:MusicPlayer;
  constructor(element:HTMLElement , musicPlayer:MusicPlayer){
    this.element = element
    this.musicPlayer = musicPlayer
  }
  public setIcon(icon:string , attr:string):void{
    if(icon && attr){
      this.element.classList.replace(this.icon , icon);
      this.element.setAttribute('title' , attr)
      this.icon = icon;
    }
  }
}

export class PlayBtn extends Button implements IPlayBtn{
  icon: string;
  constructor(element:HTMLElement , musicPlayer:MusicPlayer){
    super(element , musicPlayer);
    this.icon = 'fa-play';
    this.element.addEventListener('click' ,  () => {this.musicPlayer.playController()});
  }
 
  public setIcon(icon:string , attr:string):void{
    if(icon && attr){
      this.element.classList.replace(this.icon , icon);
      this.element.setAttribute('title' , attr)
      this.icon = icon;
    }
  }
}
export class NextBtn extends Button{
  constructor(element:HTMLElement , musicPlayer:MusicPlayer){
    super(element , musicPlayer);
    this.element.addEventListener('click' ,  () => {this.musicPlayer.nextSong()});
  }
}

export class PrevBtn extends Button{
  constructor(element:HTMLElement , musicPlayer:MusicPlayer){
    super(element , musicPlayer);
    this.element.addEventListener('click' ,  () => {this.musicPlayer.prevSong()});
  }
}


