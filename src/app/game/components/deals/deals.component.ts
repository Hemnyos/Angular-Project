import { Component, OnInit } from '@angular/core';
import { BasketService } from '../../services/basket.service';
import { GameService } from '../../services/game.service';

@Component({
  selector: 'app-deals',
  templateUrl: './deals.component.html',
  styleUrls: ['./deals.component.scss'],
})
export class DealsComponent implements OnInit {
  constructor(
    public gameService: GameService,
    public basketService: BasketService
  ) {}
  titleSearch: string = '';
  ngOnInit(): void {}

  search(): void {
    this.gameService.setFilterDeal({ title: this.titleSearch });
    this.gameService.getDeals();
  }
}