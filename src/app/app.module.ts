import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { ViewModule } from './view/view.module';
import { routes } from './app.routing';
import { MyPokeService } from './view/tools/mypoke.service';
import {Location, CommonModule} from '@angular/common';
@NgModule({
  imports: [ 
    CommonModule,
    BrowserModule, 
    FormsModule,
    ViewModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  providers: [MyPokeService, Location],
  declarations: [ 
    AppComponent,
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
