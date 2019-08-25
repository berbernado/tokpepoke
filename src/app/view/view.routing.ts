import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PokemonComponent } from './pokemon/pokemon.component';
import { PokemonDetailComponent } from './pokemon/pokemon.detail.component';
import { MypokeComponent } from './mypoke/mypoke.component';

export 
const viewRoutes: Routes = [
  { path: 'pokemon', 
    component: PokemonComponent 
  },
  { path: 'detial/:id',
    component: PokemonDetailComponent
  },
  { path: 'mypoke',
    component: MypokeComponent
  },
];


