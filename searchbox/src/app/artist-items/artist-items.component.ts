import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-artist-items',
  templateUrl: './artist-items.component.html',
  inputs: ['artist']
})
export class ArtistItemsComponent implements OnInit {
  artist: object;
  constructor() {
    
   }

  ngOnInit(): void {
    // this.artist = {
    //   "name":"ganesh",
    //   shortname:"ganesh",
    //   "reknown":"ganesh",
    //   "bio":"ganesh"
    // }
  }

}