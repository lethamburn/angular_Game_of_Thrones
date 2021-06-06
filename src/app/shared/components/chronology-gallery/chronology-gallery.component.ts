import { Component, Input, OnInit } from '@angular/core';
import { CharactersService } from '../../services/characters.service';

@Component({
  selector: 'app-chronology-gallery',
  templateUrl: './chronology-gallery.component.html',
  styleUrls: ['./chronology-gallery.component.scss']
})
export class ChronologyGalleryComponent implements OnInit {
  characterOrder: any[] = [];
  constructor(private charactersService: CharactersService) { }
  textfilter: any;

  // @Input() chronologyList: any[] = [];
  @Input() characters: any[] = [];

  ngOnInit(): void {
    this.charactersService.getCharacters().subscribe((charactersData: any) => {
      console.log(charactersData);
      for (let characterData of charactersData) {
        if (characterData.age && characterData.age.age) {
          // const charactersort = charactersData;
          this.characterOrder.push(characterData)
        }
      };
      this.listCharactersAsc(this.characterOrder)
      console.log(this.characterOrder)
    }
    )
  }

  listCharactersAsc(listCharacters: any) {
    listCharacters.sort(function (a: any, b: any) {
      if (a.age.age > b.age.age) {
        return 1;
      }
      if (a.age.age < b.age.age) {
        return -1;
      }
      return 0;
    });

  }


};

