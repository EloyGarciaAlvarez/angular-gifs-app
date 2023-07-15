import { Component, Input } from '@angular/core';
import { GifsService } from 'src/app/gifs/services/gifs.service';

@Component({
  selector: 'shared-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {
  constructor( private gifsService: GifsService ){}

  get tags(): string[] {
    return this.gifsService.tagsHistory;
  }

  searchTag ( itemMenuTag: string): void{
    this.gifsService.searchTag(itemMenuTag);
    console.log(this.gifsService.tagsHistory);
  }
}
