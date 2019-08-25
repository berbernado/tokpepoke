import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import {Observable} from 'rxjs';
import {MyPokeService} from '../tools/mypoke.service';
import {Pokemon} from '../tools/pokemon.class';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  public mypokeItems$: Observable<Pokemon[]>;
  constructor(private MyPokeService: MyPokeService) { 
    this.mypokeItems$ = this
      .MyPokeService
      .getItems();

    this.mypokeItems$.subscribe(_ => _);
  }

  ngOnInit() {
  }
}