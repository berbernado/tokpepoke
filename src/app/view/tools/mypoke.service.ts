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
    console.log(item);
    this.itemsMyPokeSubject.next([...this.itemsInMyPoke, item]);
  }

  public getItems(): Observable<Pokemon[]> {
    return this.itemsMyPokeSubject;
  }

  public removeFromCart(item: Pokemon) {
    const currentItems = [...this.itemsInMyPoke];
    const itemsWithoutRemoved = currentItems.filter(_ => _.id !== item.id);
    this.itemsMyPokeSubject.next(itemsWithoutRemoved);
  }

  public getTotalAmount(): Observable<number> {
    return this.itemsMyPokeSubject.map((items: Pokemon[]) => {
      return items.reduce((prev) => {
        return prev;
      }, 0);
    });
  }
}