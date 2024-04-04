import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ButtonComponent } from './components/atoms/button/button.component';
import { CardComponent } from './components/molecules/card/card.component';
import { CategoryComponent } from './components/molecules/category/category.component';
import { DeckComponent } from './components/molecules/deck/deck.component';
import { CardsComponent } from './pages/cards/cards.component';
import { CategoriesComponent } from './pages/categories/categories.component';
import { DecksComponent } from './pages/decks/decks.component';
import { PlayComponent } from './pages/play/play.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { ListCategoryComponent } from './components/organism/list-category/list-category.component';
import { ListDeckComponent } from './components/organism/list-deck/list-deck.component';
import { ListCardComponent } from './components/organism/list-card/list-card.component';
import { ListHeaderComponent } from './components/molecules/list-header/list-header.component';

@NgModule({
  declarations: [
    AppComponent,
    ButtonComponent,
    CardComponent,
    CategoryComponent,
    DeckComponent,
    NavbarComponent,
    DecksComponent,
    CategoriesComponent,
    CardsComponent,
    PlayComponent,
    ListCategoryComponent,
    ListDeckComponent,
    ListCardComponent,
    ListHeaderComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
