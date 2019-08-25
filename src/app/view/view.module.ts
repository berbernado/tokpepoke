import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { ContentComponent } from './content/content.component';
import { ContentDetailComponent } from './content/content.detail.component';
import { PokemonComponent } from './pokemon/pokemon.component';
import { PokemonDetailComponent } from './pokemon/pokemon.detail.component';
import { FilterPipe} from '../../config/filter.pipe';
import { ColorTypePipe } from './tools/colortype.pipe';
import { ColorStatPipe } from './tools/colorstat.pipe';
import { ReplaceLinePipe } from './tools/replaceline.pipe';
import { MypokeComponent } from './mypoke/mypoke.component';
import { MyPokeService } from './tools/mypoke.service';
import { viewRoutes } from './view.routing';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(viewRoutes)
  ],
  declarations: [
    ContentComponent,
    ContentDetailComponent, 
    PokemonComponent, 
    PokemonDetailComponent, 
    FilterPipe, 
    ColorTypePipe, 
    ColorStatPipe,
    ReplaceLinePipe,
    MypokeComponent 
  ],
  providers: [MyPokeService],
  exports: [PokemonComponent,PokemonDetailComponent,MypokeComponent]
})
export class ViewModule { }