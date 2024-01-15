import { GifsModule } from './../../../gifs/gifs.module';
import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, OnDestroy, OnInit } from '@angular/core';
import { GifsService } from '../../../gifs/services/gifs.service';

@Component({
  selector: 'shared-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css',
})
export class SidebarComponent{

  // tags: string[] = [];

  constructor(private gifsService: GifsService){};

  get tags():string[] {
    // console.log(this.gifsService.tagsHistory);
    return this.gifsService.tagsHistory;
  };

  searhTag(tag:string){
    this.gifsService.searchTag(tag);
  }

  // ngOnInit():void {a
  //   this.tags = this.gifsService.tagsHistory;
  //   this.gifsService.tagsHistoryChanged.subscribe((updatedTags: string[]) => {
  //     this.tags = updatedTags;
  //     console.log("Hola desde update");
  //     console.log(this.tags);

  //   });
  // }

  // ngOnDestroy():void {
  //   this.gifsService.tagsHistoryChanged.unsubscribe();
  // }
}
