import { Injectable } from '@angular/core';
import { IProduct } from './products.service';

export interface IBasketProduct extends IProduct {
  quantity?: number;
}
@Injectable({
  providedIn: 'root',
})
export class BasketService {
  constructor() {}

  basketProducts: (IProduct & { quantity: number })[] = [];

  isOpenBasket = false;

  addProduct(product: IProduct) {
    const productInArr = this.basketProducts.find(
      (prod) => prod.id === product.id
    );
    if (!productInArr) {
      this.basketProducts.push({ ...product, quantity: 1 });
    } else {
      this.basketProducts.forEach((prod, i) => {
        if (productInArr.id === prod.id)
          this.basketProducts[i].quantity = ++prod.quantity;
      });
    }
  }

  deleteProduct(productId: number) {
    const productInArr = this.basketProducts.find(
      (prod) => prod.id === productId
    );
    if (productInArr && productInArr?.quantity === 1) {
      this.basketProducts = this.basketProducts.filter(
        (product) => product.id !== productId
      );
    }
    this.basketProducts.forEach((prod, i) => {
      if (productInArr && productInArr.id === prod.id) {
        this.basketProducts[i].quantity = --prod.quantity;
      }
    });
  }

  deleteAll() {
    this.basketProducts = [];
  }

  toggleOpenBasket() {
    this.isOpenBasket = !this.isOpenBasket;
  }
}
