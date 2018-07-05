import { Injectable } from '@angular/core';
import { Hero,Villian } from './character';

import { HEROES,VILLIANS } from './characterlist';

@Injectable({  providedIn: 'root'})
export class CharacterService {
  getHeroes(): Hero[] {
    return HEROES;
  }
  constructor() { }

}
