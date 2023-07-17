import { Injectable } from '@angular/core';
import { Character } from '../interfaces/character.interface';
import {v4 as uuid} from 'uuid';

@Injectable({
  providedIn: 'root'
})
export class DbzServiceTsService {

  public characters: Character[] =[{
    id: uuid(),
    name: 'Krillin',
    power: 1000
  },{
    id: uuid(),
    name: 'Goku',
    power: 9500
  },{
    id: uuid(),
    name: 'Vegeta',
    power: 7500
  }]


  onNewCharacter(character: Character):void{
    character.id = uuid();
      this.characters.push(character);
  }

  //onDeleteCharacter(index: number):void{

    //this.characters.splice(index, 1);
    deleteCharacterById(id : String ) : void{
      this.characters = this.characters.filter(character => character.id!==id);

}
}
