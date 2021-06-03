import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreComponent } from './core/core.component';
import { PagesComponent } from './pages/pages.component';
import { SharedComponent } from './shared/shared.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { CharactersPageComponent } from './pages/characters-page/characters-page.component';
import { HousesPageComponent } from './pages/houses-page/houses-page.component';
import { ChronologyPageComponent } from './pages/chronology-page/chronology-page.component';

@NgModule({
  declarations: [
    AppComponent,
    CoreComponent,
    PagesComponent,
    SharedComponent,
    HomePageComponent,
    CharactersPageComponent,
    HousesPageComponent,
    ChronologyPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
   /*  TranslateModule.forRoot() */
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
