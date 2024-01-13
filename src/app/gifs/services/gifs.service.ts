import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Gif, SearchResponse } from '../interfaces/gifs.interfaces';

// const GIPHI_API_KEY = "LtqR03My4fnonnlqVEpAIovP3aLEzeFU";

@Injectable({providedIn: 'root'})
export class GifsService {

  private _tagsHistory: string[] = [];

  private _giftServiceUrl:string = "https://api.giphy.com/v1/gifs";
  private _apikey:string = "LtqR03My4fnonnlqVEpAIovP3aLEzeFU";

  public gifList: Gif[] = [];

  // tagsHistoryChanged = new EventEmitter<string[]>();

  constructor(private http:HttpClient) { };

  get tagsHistory(){
    return [...this._tagsHistory];
  };

  private organizeHistory(tag:string){

    tag = tag.toLocaleLowerCase();

    if(this._tagsHistory.includes(tag)){
      this._tagsHistory = this._tagsHistory.filter((oldTag) => oldTag !== tag );
    }
    this._tagsHistory.unshift(tag);
    this._tagsHistory = this._tagsHistory.splice(0,10);
  }


  searchTag( tag:string ){
    if(tag.length === 0)return;
    this.organizeHistory(tag);

    const params = new HttpParams()
      .set('api_key',this._apikey)
      .set('limit','10')
      .set('q',tag)

    this.http.get<SearchResponse>(`${this._giftServiceUrl}/search`,{params})
      .subscribe( resp => {
        console.log(resp.data);
        this.gifList = resp.data;
      });
    // fetch('https://api.giphy.com/v1/gifs/search?api_key=LtqR03My4fnonnlqVEpAIovP3aLEzeFU&q=valorant&limit=10').then(
    //   resp => resp.json()
    // ).then(
    //   data => console.log(data)
    // );
    // this.tagsHistoryChanged.emit(this._tagsHistory);
    // console.log(this._tagsHistory);
  }


}
