import { Component, OnInit } from '@angular/core';
import { BasketService } from 'src/app/services/basket.service';
import { IProduct, ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-store-page',
  templateUrl: './store-page.component.html',
  styleUrls: ['./store-page.component.scss'],
})
export class StorePageComponent implements OnInit {
  products: IProduct[];

  constructor(
    private productService: ProductsService,
    public basketService: BasketService
  ) {}

  ngOnInit(): void {
    this.products = this.productService.products;
  }

  toggleBasket() {
    this.basketService.isOpenBasket = !this.basketService.isOpenBasket;
  }
}
