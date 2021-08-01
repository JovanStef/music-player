import { IButton } from "./IButton";
import { IProgressBar } from "./IProgressBar";
import { ISong } from "./ISong";

export interface IMusicPlayer{
  playBtn:IButton,
  nexBtn:IButton,
  prevBtn:IButton,
  progressBar:IProgressBar,
  songs:ISong[]
}