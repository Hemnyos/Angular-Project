import { Component, OnInit } from '@angular/core';
import { Deal, Store } from '../../model/game';
import { BasketService } from '../../services/basket.service';
import { GameService } from '../../services/game.service';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss'],
})
export class GameComponent implements OnInit {
  constructor(
    public gameService: GameService,
    public basketService: BasketService
  ) {}

  ngOnInit(): void {
    this.gameService.getStores().then((stores) => {
      this.gameService.getDeals();
    });
  }
}