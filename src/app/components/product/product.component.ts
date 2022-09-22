import { Component, Input, OnInit } from '@angular/core';
import { BasketService, IBasketProduct } from 'src/app/services/basket.service';
import { IProduct } from 'src/app/services/products.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
})
export class ProductComponent implements OnInit {
  @Input() product: IBasketProduct;
  @Input() isInBasket = false;

  constructor(public basketService: BasketService) {}

  ngOnInit(): void {}

  addToBasket() {
    this.basketService.addProduct(this.product);
  }
  removeFromBasket(productId: number) {
    this.basketService.deleteProduct(productId);
  }
}
