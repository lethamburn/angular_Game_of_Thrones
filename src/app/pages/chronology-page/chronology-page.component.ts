import { Component, OnInit } from '@angular/core';
import { CharactersService } from 'src/app/shared/services/characters.service';

@Component({
  selector: 'app-chronology-page',
  templateUrl: './chronology-page.component.html',
  styleUrls: ['./chronology-page.component.scss']
})
export class ChronologyPageComponent implements OnInit {

  characters: any = [];

  constructor(private charactersService: CharactersService) { }

  ngOnInit(): void {
    // this.charactersService.getCharacters().subscribe((charactersData: any) => {
    //   console.log(charactersData);
    //   function compare( a:any, b:any ) {
    //     if ( a.age.age < b.age.age ){
    //       return -1;
    //     }
    //     if ( a.age.age > b.age.age ){
    //       return 1;
    //     }
    //     return 0;
    //   }
    //   const charactersort = charactersData;
    //   console.log(charactersort[0].age.age);
    //   // charactersort.sort();
    //   this.characters = charactersort;
    // });
  }
}