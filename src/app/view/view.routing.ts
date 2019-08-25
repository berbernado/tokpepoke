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
  { path: 'pokemon/:id',
    component: PokemonDetailComponent
  },
  { path: 'mypoke',
    component: MypokeComponent
  },
  {
    path: 'pokemon',
    component: PokemonComponent,
    data: { title: 'pokemon List' }
  },
  { path: '',
    redirectTo: '/pokemon',
    pathMatch: 'full'
  },
];


