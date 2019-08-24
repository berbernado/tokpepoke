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
  public weight: any;


  loading = true;

  constructor(private route: ActivatedRoute,
              private httpService: HttpClient) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.namepoke = params.id;
    });
    this.getPokeImages();
  }

  getPokeImages(){ 
    this.httpService.get<any>(UrlCollection.LISTPOKEMON + this.namepoke + '/').subscribe(
      detilpoke => {
        this.abilities = detilpoke.abilities;
        this.base_experience = detilpoke.base_experience;
        this.forms = detilpoke.forms;
        this.game_indices = detilpoke.game_indices;
        this.height = detilpoke.height;
        this.held_items = detilpoke.held_items;
        this.id = detilpoke.id;
        this.is_default = detilpoke.is_default;
        this.location_area_encounters = detilpoke.location_area_encounters;
        this.moves = detilpoke.moves;
        this.name = detilpoke.name;
        this.order = detilpoke.order;
        this.species = detilpoke.species;
        this.sprites = detilpoke.sprites;
        this.stats = detilpoke.stats;
        this.types = detilpoke.types;
        this.weight = detilpoke.weight;
        this.loading = false;

      },
      error => {
        console.log(error);
      });
  }

}