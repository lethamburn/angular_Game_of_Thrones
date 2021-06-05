import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CharactersService } from 'src/app/shared/services/characters.service';

@Component({
  selector: 'app-characters-detail',
  templateUrl: './characters-detail.component.html',
  styleUrls: ['./characters-detail.component.scss'],
})
export class CharactersDetailComponent implements OnInit {
  character: any;
  constructor(
    private route: ActivatedRoute,
    private charactersService: CharactersService
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      const idCharacter = params.get('idCharacter');
/*       console.log(nameCharacter); */

      this.charactersService
        .getCharacter(idCharacter)
        .subscribe((characterData) => {
/*           console.log(characterData); */
          this.character = characterData;
        });
    });
  }
}
