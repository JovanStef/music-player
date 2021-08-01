import { AudioController } from "../player-service/audioControler";
import { IProgressBar } from "../models/IProgressBar";

export class ProgressBar implements IProgressBar{
  private PROGRESS_BAR:HTMLElement | any = document.getElementById('progress');
  private CURRENT_TIME:HTMLElement | any = document.getElementById('current-time');
  private DURATION:HTMLElement | any = document.getElementById('duration');
  private PROGRESS_CONTAINER:HTMLElement | any = document.getElementById('progress-container');


  element:HTMLMediaElement
  duration:number | any;
  currentTime:number | any;
  audioController:AudioController

  constructor( element:HTMLMediaElement ,audioController:AudioController){
    this.element = element;
    
    this.element.onloadedmetadata = (evt :any) => this.loadMetaData(evt);
   
    this.audioController = audioController;
    this.element.addEventListener('timeupdate' , (e)=>this.updateTimers(e));

    this.PROGRESS_CONTAINER.addEventListener('click' , (e:any) => this.seekTrack(e))
    
  }
  updateTimers(e?:any){
    if(e){
      this.duration = e.srcElement.duration;
      this.currentTime = e.srcElement.currentTime;
    }
    this.displayTimer().duration();
    this.displayTimer().currentTime();
  }
  displayTimer(){
    const progressPercent = (this.currentTime / this.duration) * 100;
    this.PROGRESS_BAR.style.width = `${progressPercent}%`;
    
    const duration = ()=> {
      const durationMinutes:number | any = Math.floor(this.duration / 60);
      let durationSeconds:number | any = Math.floor(this.duration % 60);
      if(durationSeconds < 10){
        durationSeconds = `0${durationSeconds}`;
      }
      if(durationSeconds){
        this.DURATION.textContent = `${durationMinutes}:${durationSeconds}`
      }
    }
    const currentTime = () => {
      const currentTimeMinutes:number | any = Math.floor(this.currentTime / 60);
      let currentTimeSeconds:number | any = Math.floor(this.currentTime % 60);
      if(currentTimeSeconds < 10){
        currentTimeSeconds = `0${currentTimeSeconds}`;
      }
      if(currentTimeSeconds){
        this.CURRENT_TIME.textContent = `${currentTimeMinutes}:${currentTimeSeconds}`
      }
    }
    return {
      duration,
      currentTime
    }
  }
  loadMetaData(evt:any){
    this.duration = evt.target.duration
    this.currentTime = evt.target.currentTime
    this.displayTimer().duration();
    this.displayTimer().currentTime();
  }
  seekTrack(e:any){
    let element = this.PROGRESS_CONTAINER.getBoundingClientRect();
    let mouse = e.clientX
    const progressPercent = ( ( mouse - element.x ) / element.width ) * 100;
    this.PROGRESS_BAR.style.width = `${progressPercent}%`;
    this.element.currentTime = this.duration / (100 / progressPercent);
  }
}