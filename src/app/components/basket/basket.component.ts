import { Component, OnInit } from '@angular/core';
import { BasketService } from 'src/app/services/basket.service';

@Component({
  selector: 'app-basket',
  templateUrl: './basket.component.html',
  styleUrls: ['./basket.component.scss'],
})
export class BasketComponent implements OnInit {
  constructor(public basketService: BasketService) {}

  ngOnInit(): void {}

  closeBasket() {
    this.basketService.isOpenBasket = !this.basketService.isOpenBasket;
  }

  clearBasket() {
    this.basketService.deleteAll();
    this.basketService.toggleOpenBasket();
  }
}
