import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContentComponent } from './content/content.component';
import { ContentDetailComponent } from './content/content.detail.component';
import { MypokeComponent } from './mypoke/mypoke.component';

export 
const viewRoutes: Routes = [
  { path: 'pokemon', 
    component: ContentComponent 
  },
  { path: 'pokemon/:id',
    component: ContentDetailComponent
  },
  { path: 'mypoke',
    component: MypokeComponent
  },
  {
    path: 'pokemon',
    component: ContentComponent,
    data: { title: 'pokemon List' }
  },
  { path: '',
    redirectTo: '/pokemon',
    pathMatch: 'full'
  },
];


