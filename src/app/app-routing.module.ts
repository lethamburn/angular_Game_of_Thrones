import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CharactersDetailComponent } from './pages/characters-page/characters-detail/characters-detail.component';
import { CharactersPageComponent } from './pages/characters-page/characters-page.component';
import { ChronologyPageComponent } from './pages/chronology-page/chronology-page.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { HousesDetailComponent } from './pages/houses-page/houses-detail/houses-detail.component';
import { HousesPageComponent } from './pages/houses-page/houses-page.component';

const routes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'characters', component: CharactersPageComponent },
  { path: 'characters/:idCharacter', component: CharactersDetailComponent },
  { path: 'houses', component: HousesPageComponent },
  { path: 'houses/:idHouses', component: HousesDetailComponent },
  { path: 'chronology', component: ChronologyPageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
