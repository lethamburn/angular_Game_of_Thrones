import { Component, Input, OnInit } from '@angular/core';
import { CharactersService } from '../../services/characters.service';

@Component({
  selector: 'app-chronology-gallery',
  templateUrl: './chronology-gallery.component.html',
  styleUrls: ['./chronology-gallery.component.scss']
})
export class ChronologyGalleryComponent implements OnInit {

  constructor(private charactersService: CharactersService) { }
  textfilter: any;
  @Input() chronologyList: any[] = [];
  @Input() characters: any[] = [];

  ngOnInit(): void {
    this.charactersService.getCharacters().subscribe((charactersData: any) => {
      console.log(charactersData);
      function compare( a:any, b:any ) {
        if ( a.age.age < b.age.age ){
          return -1;
        }
        if ( a.age.age > b.age.age ){
          return 1;
        }
        return 0;
      }
      const charactersort = charactersData;
      console.log(charactersort[0].age.age);
      this.characters = charactersort.sort();
    });
  }
}