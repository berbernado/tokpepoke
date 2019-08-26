import {Injectable} from '@angular/core';
import {Pokemon} from './pokemon.class';
import {BehaviorSubject, Observable, Subject, Subscriber} from 'rxjs';
import {of} from 'rxjs/observable/of';
@Injectable()
export class MyPokeService {
  private itemsMyPokeSubject: BehaviorSubject<Pokemon[]> = new BehaviorSubject([]);
  private itemsInMyPoke: Pokemon[] = [];
  private itemsCatchPoke: Pokemon[] = [];

  constructor() {
    this.itemsMyPokeSubject.subscribe(_ => this.itemsInMyPoke = _);
  }

  public addToMyPoke(item: Pokemon) {
    
    if(localStorage.getItem('favpokemon') != "" && localStorage.getItem('favpokemon') != null){
      const favpokemon = JSON.parse(localStorage.getItem('favpokemon'));
      this.itemsInMyPoke = favpokemon;
      const getdata: number = this.itemsInMyPoke.findIndex(o => o.id === item.id);
      
      if (getdata < 0){
        this.itemsInMyPoke.push(
          { id: item.id, name: item.name }
        );
      }
      
    } else {
      this.itemsInMyPoke.push(
       { id: item.id, name: item.name }
      );
    }

    localStorage.setItem('favpokemon', JSON.stringify(this.itemsInMyPoke));
    this.itemsMyPokeSubject.next([...this.itemsInMyPoke]);
  }

  public catchPokemon(item: Pokemon) {
    
    if(localStorage.getItem('catchpokemon') != "" && localStorage.getItem('catchpokemon') != null){
      const catchpokemon = JSON.parse(localStorage.getItem('catchpokemon'));
      this.itemsCatchPoke = catchpokemon;
      const getdata: number = this.itemsInMyPoke.findIndex(o => o.id === item.id);
      
      if (getdata < 0){
        this.itemsCatchPoke.push(
          { id: item.id, name: item.name }
        );
      }
      
    } else {
      this.itemsCatchPoke.push(
       { id: item.id, name: item.name }
      );
    }

    localStorage.setItem('catchpokemon', JSON.stringify(this.itemsCatchPoke));
  }

  getListFavPoke() {
    if(localStorage.getItem('favpokemon') != "" && localStorage.getItem('favpokemon') != null){
      const favpokemon = JSON.parse(localStorage.getItem('favpokemon'));
      
    return this.itemsInMyPoke = favpokemon;
    }
    return [];
  }

  public getItems(): Observable<Pokemon[]> {
    //localStorage.setItem('favpokemon', '');
     if(localStorage.getItem('favpokemon') != "" && localStorage.getItem('favpokemon') != null){
        if (this.itemsInMyPoke.length === 0) {
          
          const favpokemon = JSON.parse(localStorage.getItem('favpokemon'));
          this.itemsInMyPoke = favpokemon;
          this.itemsMyPokeSubject.next([...this.itemsInMyPoke]);
        }
     }
    return this.itemsMyPokeSubject;
  }

  public removeFromFav(id: any) {
    const favpokemon = JSON.parse(localStorage.getItem('favpokemon'));
    this.itemsInMyPoke = favpokemon;

    const getdata: number = this.itemsInMyPoke.findIndex(o => o.id === id);
    const newArray = this.itemsInMyPoke.filter(value => Object.keys(value).length !== 0);
    
    if (delete newArray[getdata]) {
      this.itemsInMyPoke = newArray;
      this.itemsInMyPoke = this.itemsInMyPoke.filter(value => Object.keys(value).length !== 0);; 
      localStorage.setItem('favpokemon', JSON.stringify(this.itemsInMyPoke));
      this.itemsMyPokeSubject.next([...this.itemsInMyPoke]);
    }
  }

  public saveNickname(item: Pokemon) {
    const favpokemon = JSON.parse(localStorage.getItem('catchpokemon'));
    this.itemsInMyPoke = favpokemon;

    const getdata: number = this.itemsInMyPoke.findIndex(o => o.id === item.id);
    const newArray = this.itemsInMyPoke.filter(value => Object.keys(value).length !== 0);
    delete newArray[getdata]
    this.itemsInMyPoke = newArray;
    this.itemsInMyPoke = this.itemsInMyPoke.filter(value => Object.keys(value).length !== 0);
    this.itemsInMyPoke.push(
      { id: item.id, name: item.name, nickname: item.nickname }
    );

    localStorage.setItem('catchpokemon', JSON.stringify(this.itemsInMyPoke));
  }
}