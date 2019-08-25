import {Component, OnInit} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {MyPokeService} from '../tools/mypoke.service';
import {Pokemon} from '../tools/pokemon.class';
import {Observable} from 'rxjs';
import {of} from 'rxjs/observable/of';
import { UrlCollection } from '../../../config/UrlCollection';


@Component({
  selector: 'app-mypoke',
  templateUrl: './mypoke.component.html',
  styleUrls: ['./mypoke.component.css']
})
export class MypokeComponent implements OnInit {
  public myPokeItems$: Observable<Pokemon[]> = of([]);
  public myPokeItems: Pokemon[] = [];

  public arrPoke: [];
  public listpoke = [];
  public dataPoke = [];
  public geturl: any;


  constructor(private MyPokeService: MyPokeService,
              private httpService: HttpClient) {
    this.myPokeItems$ = this
      .MyPokeService
      .getItems();

    this.myPokeItems$.subscribe(_ => this.myPokeItems = _);
  }
  ngOnInit() {
    console.log(localStorage.getItem('favpokemon'));
    this.getPokeImages();
  }

  public getTotal(): Observable<number> {
    return this.MyPokeService.getTotalAmount();
  }

  public removeItem(item: Pokemon) {
    this.MyPokeService.removeFromCart(item)
  }

  getPokeImages(){ 
    for (const result of this.myPokeItems) {
      this.httpService.get<any>(UrlCollection.LISTPOKEMON + result.id + '/').subscribe(
        detilpoke => {
          this.httpService.get<any>(UrlCollection.FORMPOKEMON + detilpoke.id + '/').subscribe(
            data => {
              this.dataPoke.push({idpoke: detilpoke.id,
                name: detilpoke.name,
                typepoke: detilpoke.types,
                photo: data.sprites.front_default,
              });
              this.listpoke = this.dataPoke.sort((a, b) => {
                return a.idpoke - b.idpoke;
              });
            },
              error => {
              console.log(error);
            });
        },
          error => {
          console.log(error);
        });
    }
  }

  movedetail(name: string){
    window.location.href = 'detial/' + name;
  }

}