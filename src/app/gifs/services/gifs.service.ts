import { Injectable } from '@angular/core';

@Injectable({providedIn: 'root'})
export class GifsService {

  private _tagsHistory: string[] = [];

  // tagsHistoryChanged = new EventEmitter<string[]>();

  constructor() { };

  get tagsHistory(){
    return [...this._tagsHistory];
  };


  searchTag( tag:string ):void{
    this._tagsHistory.unshift(tag);
    // this.tagsHistoryChanged.emit(this._tagsHistory);
    // console.log(this._tagsHistory);
  }


}
