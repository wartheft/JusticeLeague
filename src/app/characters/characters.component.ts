import { Component, OnInit } from '@angular/core';

import { Hero,Villian } from '../character';
import { HEROES,VILLIANS } from '../characterlist';
import { CharacterService } from '../character.service';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.css']
})
export class CharactersComponent implements OnInit {
  heroes: Hero[];
  //Heros=HEROES;
  Villians=VILLIANS;
  selectedHero: Hero;
  selectedVillian: Villian;


  Leader:Hero={Rank: 1,
  Name: 'Captain America',
  Skills: 'Super Human Strength, Hyper Intelligent',
  Birthday : 'January 16 1987'};


  getHeroes(): void {
    this.heroes = this.characterService.getHeroes();
  }

  onSelect(hero: Hero): void {
    console.log(hero);
    this.selectedHero = hero;
  }
constructor(private characterService: CharacterService) { }
  ngOnInit() {
    this.getHeroes();
  }
}
