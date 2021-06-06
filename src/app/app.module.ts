import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreComponent } from './core/core.component';
import { PagesComponent } from './pages/pages.component';
import { SharedComponent } from './shared/shared.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { CharactersPageComponent } from './pages/characters-page/characters-page.component';
import { HousesPageComponent } from './pages/houses-page/houses-page.component';
import { ChronologyPageComponent } from './pages/chronology-page/chronology-page.component';
import { StylesComponent } from './styles/styles.component';
import { ComponentsComponent } from './shared/components/components.component';
import { ServicesComponent } from './shared/services/services.component';
import { CharactersDetailComponent } from './pages/characters-page/characters-detail/characters-detail.component';
import { HousesDetailComponent } from './pages/houses-page/houses-detail/houses-detail.component';
import { ElementsComponent } from './styles/elements/elements.component';
import { SettingsComponent } from './styles/settings/settings.component';
import { HeaderComponent } from './core/header/header.component';
import { FooterComponent } from './core/footer/footer.component';
import { GalleryComponent } from './shared/components/gallery/gallery.component';
import { HttpClientModule } from '@angular/common/http';
import { HousesGalleryComponent } from './shared/components/houses-gallery/houses-gallery.component';
import { FiltercharactersPipe } from './pipes/filtercharacters.pipe';


@NgModule({
  declarations: [
    AppComponent,
    CoreComponent,
    PagesComponent,
    SharedComponent,
    HomePageComponent,
    CharactersPageComponent,
    HousesPageComponent,
    ChronologyPageComponent,
    StylesComponent,
    ComponentsComponent,
    ServicesComponent,
    CharactersDetailComponent,
    HousesDetailComponent,
    ElementsComponent,
    SettingsComponent,
    HeaderComponent,
    FooterComponent,
    GalleryComponent,
    HousesGalleryComponent,
    FiltercharactersPipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

