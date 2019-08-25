import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'pokemon'
  },
  {
    path: 'pokemon',
    loadChildren: './view/view.module#ViewModule'
  }
];
