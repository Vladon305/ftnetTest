import { Injectable } from '@angular/core';
import { data } from '../data/products';

interface IAttr {
  color: string;
  format: string;
}

export interface IProduct {
  id: number;
  name: string;
  price: number;
  attr: IAttr;
}

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  constructor() {}

  products: IProduct[] = JSON.parse(data);
}
