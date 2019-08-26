import {Injectable} from '@angular/core';
import {Pokemon} from './pokemon.class';
import {BehaviorSubject, Observable, Subject, Subscriber} from 'rxjs';
import {of} from 'rxjs/observable/of';
@Injectable()
export class MyPokeService {
  private itemsMyPokeSubject: BehaviorSubject<Pokemon[]> = new BehaviorSubject([]);
  private itemsInMyPoke: Pokemon[] = [];

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

  getListFavPoke() {
    if(localStorage.getItem('favpokemon') != "" && localStorage.getItem('favpokemon') != null){
      const favpokemon = JSON.parse(localStorage.getItem('favpokemon'));
      
    return this.itemsInMyPoke = favpokemon;
    }
    return [];
  }

  public getItems(): Observable<Pokemon[]> {
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
    /*const currentItems = [...this.itemsInMyPoke];
    const itemsWithoutRemoved = currentItems.filter(_ => _.id !== item.id);
    this.itemsMyPokeSubject.next(itemsWithoutRemoved);*/
    const favpokemon = JSON.parse(localStorage.getItem('favpokemon'));
    this.itemsInMyPoke = favpokemon;
    const getdata: number = this.itemsInMyPoke.findIndex(o => o.id === id);
    if (delete this.itemsInMyPoke[getdata]) {
       localStorage.setItem('favpokemon', JSON.stringify(this.itemsInMyPoke));
       this.itemsMyPokeSubject.next([...this.itemsInMyPoke]);
    }
  }
}