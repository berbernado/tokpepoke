import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { ViewModule } from './view/view.module';
import { ViewRoutingModule } from './app.routing';
import { ContentComponent } from './view/content/content.component';
import { FooterComponent } from './view/footer/footer.component';
import { HeaderComponent } from './view/header/header.component';
import { PokemonComponent } from './view/pokemon/pokemon.component';

@NgModule({
  imports: [ 
    BrowserModule, 
    FormsModule,
    ViewModule,
    HttpClientModule,
    ViewRoutingModule
  ],
  declarations: [ 
    AppComponent, ContentComponent, FooterComponent, HeaderComponent, PokemonComponent,
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
