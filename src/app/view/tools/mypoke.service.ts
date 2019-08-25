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
    this.itemsMyPokeSubject.next([...this.itemsInMyPoke, item]);
  }

  public getItems(): Observable<Pokemon[]> {
    return this.itemsMyPokeSubject;
  }
}