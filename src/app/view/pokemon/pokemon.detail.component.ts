import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { UrlCollection } from '../../../config/UrlCollection';

@Component({
  selector: 'app-pokemondetial',
  templateUrl: './pokemon.detail.component.html',
  styleUrls: ['./pokemon.component.css']
})
export class PokemonDetialComponent implements OnInit {
  public namepoke: string;
  public abilities: any;
  public base_experience: any;
  public forms: any;
  public game_indices: any;
  public height: any;
  public held_items: any;
  public id: any;
  public is_default: any;
  public location_area_encounters: any;
  public moves: any;
  public name: any;
  public order: any;
  public species: any;
  public sprites: any;
  public stats: any;
  public types: any;

  constructor(private route: ActivatedRoute,
              private httpService: HttpClient) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.namepoke = params.id;
    });
    this.getPokeImages();
  }

  getPokeImages(){ 
    console.log(UrlCollection.LISTPOKEMON + this.namepoke + '/');
    this.httpService.get<any>(UrlCollection.LISTPOKEMON + this.namepoke + '/').subscribe(
      detilpoke => {
       console.log(detilpoke.forms);
      },
      error => {
        console.log(error);
      });
  }

}