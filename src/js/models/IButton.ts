export interface IButton {
  element:HTMLElement,
}

export interface IPlayBtn extends IButton{
  icon:string,
  setIcon(icon:string , attr:string):void
}