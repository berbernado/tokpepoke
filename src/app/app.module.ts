import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { ViewModule } from './view/view.module';
import { ViewRoutingModule } from './app.routing';

@NgModule({
  imports: [ 
    BrowserModule, 
    FormsModule,
    ViewModule,
    HttpClientModule,
    ViewRoutingModule
  ],
  declarations: [ 
    AppComponent,
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
