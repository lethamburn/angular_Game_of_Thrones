import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class CharactersService {
  constructor(private http: HttpClient) {}

  getCharacters() {
    return this.http.get('https://api.got.show/api/show/characters/');
  }

  getCharacter = (nameCharacter: any) => {
    return this.http.get(
      `https://api.got.show/api/show/characters/${nameCharacter}`
    );
  };

  getCharacterHouse = (characterhousename: any) => {
    return this.http.get(
      `https://api.got.show/api/show/houses/${characterhousename}`
      
    );
  };
}
