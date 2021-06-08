import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CharactersService } from 'src/app/shared/services/characters.service';

@Component({
  selector: 'app-characters-detail',
  templateUrl: './characters-detail.component.html',
  styleUrls: ['./characters-detail.component.scss'],
})
export class CharactersDetailComponent implements OnInit {
  character: any = '';
  characterhouse: any = '';
  characterhousename: any = '';
  options = { 
    autoHide: false, 
    scrollbarMinSize: 30,
    
  };

  constructor(
    private route: ActivatedRoute,
    private charactersService: CharactersService
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      const nameCharacter = params.get('nameCharacter');
      this.charactersService
        .getCharacter(nameCharacter)
        .subscribe((characterData) => {
          this.character = characterData;
          this.characterhouse = this.character.house;
          console.log(this.characterhouse);

          const nameHouse = this.characterhouse;
          this.charactersService
            .getCharacterHouse(nameHouse)
            .subscribe((characterHouseData) => {
              this.characterhousename = characterHouseData;
              console.log(this.characterhousename[0]);
            });
        }); 
    });
  }
}
