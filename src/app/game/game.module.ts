import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GameComponent } from './page/game/game.component';
import { StoresComponent } from './components/stores/stores.component';
import { LoaderComponent } from './components/loader/loader.component';
import { BasketComponent } from './components/basket/basket.component';
import { DealsComponent } from './components/deals/deals.component';
import { FormsModule } from '@angular/forms';




@NgModule({
  declarations: [
    GameComponent,
    StoresComponent,
    LoaderComponent,
    BasketComponent,
    DealsComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class GameModule { }
