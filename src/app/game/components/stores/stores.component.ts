import { Component, OnInit } from '@angular/core';
import { GameService } from '../../services/game.service';

@Component({
  selector: 'app-stores',
  templateUrl: './stores.component.html',
  styleUrls: ['./stores.component.scss'],
})
export class StoresComponent implements OnInit {
  constructor(public gameService: GameService) {}

  ngOnInit(): void {}

  goToStore(storeId: string): void {
    this.gameService.setFilterDeal({ storeID: [storeId] });
    this.gameService.getDeals();
  }
}