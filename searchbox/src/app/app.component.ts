import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  implements OnInit  {
  title = 'Exported Variable from component';
  query: string;
  artists: object;
  allArtists:object;

  showArtist(item) {
    this.query = item.name;
    item.highlight = !item.highlight;
  }

  searchArtists(){
    let searchResults = [];
    for(let index=0; index<9; index++){
      if(String(this.allArtists[index].name).toLowerCase().startsWith(this.query.toLowerCase()) ){
        //console.log(String(this.allArtists[index].name));
        searchResults.push(this.allArtists[index]);
      }
    }
    this.artists=searchResults;
  }

  constructor( private http: HttpClient ) {
    this.query = '';
  }

  ngOnInit(): void {
    this.http.get<Object>('../assets/data.json').subscribe( data => {
      this.artists = data;
      this.allArtists = data;
      ///console.log(this.artists);
    })
  }
}
