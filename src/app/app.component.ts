import {Component, ViewEncapsulation} from '@angular/core';
import {Location, LocationStrategy, PathLocationStrategy} from '@angular/common';
import {Observable} from 'rxjs';
import { MyPokeService } from './view/tools/mypoke.service';
import { Pokemon } from './view/tools/pokemon.class';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent {
  public mypokeItems$: Observable<Pokemon[]>;
  constructor(public location: Location,
              private MyPokeService: MyPokeService) { 
    this.mypokeItems$ = this
      .MyPokeService
      .getItems();

    this.mypokeItems$.subscribe(_ => _);
  }
}
