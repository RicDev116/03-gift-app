import { Component, Input } from '@angular/core';

import { Gif } from '../../interfaces/gifs.interfaces';

@Component({
  selector: 'gifs-card',
  templateUrl: './gifs-card.component.html',
})

export class GifsCardComponent {

  @Input()
  public gif?: Gif;

  constructor(){
    console.log(this.gif);
  }

 }
