import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CharactersService } from 'src/app/shared/services/characters.service';
import { HousesService } from 'src/app/shared/services/houses.service';

@Component({
  selector: 'app-characters-detail',
  templateUrl: './characters-detail.component.html',
  styleUrls: ['./characters-detail.component.scss'],
})
export class CharactersDetailComponent implements OnInit {
  character: any;
  house: any;
  url: any = 'http://localhost:4200/houses'
  constructor(
    private route: ActivatedRoute,
    private charactersService: CharactersService,

  ) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      const nameCharacter = params.get('nameCharacter');
      this.charactersService
        .getCharacter(nameCharacter)
        .subscribe((characterData) => {
          this.character = characterData;
        });
    });
  }
}
