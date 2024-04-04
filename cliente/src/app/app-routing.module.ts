import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CardsComponent } from './pages/cards/cards.component';
import { CategoriesComponent } from './pages/categories/categories.component';
import { DecksComponent } from './pages/decks/decks.component';
import { PlayComponent } from './pages/play/play.component';

const routes: Routes = [
  { path: '', component: DecksComponent },
  { path: 'cards', component: CardsComponent },
  { path: 'categories', component: CategoriesComponent },
  { path: 'play', component: PlayComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
