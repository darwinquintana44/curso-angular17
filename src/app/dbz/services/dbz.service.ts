import { Injectable } from '@angular/core';
import {Character} from '../interfaces/character.interface';
import { v4 as uuid } from 'uuid'

@Injectable({
  providedIn: 'root'
})
export class DbzService {

  public characters: Character[] = [{
    id: uuid(),
    name: 'Krilin',
    power: 1000
  },{
    id: uuid(),
    name: 'Goku',
    power: 10000
  },{
    id: uuid(),
    name: 'Vegeta',
    power: 7500
  }
  ];

  addCharacter(character: Character): void {
    // console.log('MainPage');
    // console.log(character);
    const newCharacter: Character = {
      id: uuid(), ...character
    }
    this.characters.push(newCharacter);
  }

  // onDeleteCharacter(index: number): void {
  //   this.characters.splice(index, 1);
  // }

  deleteCharacterById(id: string): void {
    this.characters = this.characters.filter( (c: Character) => c.id !== id );
  }

}
