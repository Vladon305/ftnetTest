import { Injectable } from '@angular/core';
import { filter } from 'rxjs';
import { IProduct } from './products.service';

@Injectable({
  providedIn: 'root',
})
export class BasketService {
  constructor() {}

  products: IProduct[] = [];

  addProduct(product: IProduct) {
    this.products.push(product);
  }

  deleteProduct(productId: number) {
    this.products = this.products.filter((product) => product.id !== productId);
  }
}
