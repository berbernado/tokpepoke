import {Component, OnInit} from '@angular/core';
import {MyPokeService} from '../tools/mypoke.service';
import {Pokemon} from '../tools/pokemon.class';
import {Observable} from 'rxjs';
import {of} from 'rxjs/observable/of';

@Component({
  selector: 'app-mypoke',
  templateUrl: './mypoke.component.html',
  styleUrls: ['./mypoke.component.css']
})
export class MypokeComponent implements OnInit {
  public myPokeItems$: Observable<Pokemon[]> = of([]);
  public myPokeItems: Pokemon[] = [];

  constructor(private MyPokeService: MyPokeService) {
    this.myPokeItems$ = this
      .MyPokeService
      .getItems();

    this.myPokeItems$.subscribe(_ => this.myPokeItems = _);
  }
  ngOnInit() {
    console.log(this.myPokeItems$);
  }

}