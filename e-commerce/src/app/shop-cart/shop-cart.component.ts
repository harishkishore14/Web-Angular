import { Component, OnInit } from '@angular/core';
import { Cart, CartItem } from './shop-cart.model';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-shop-cart',
  templateUrl: './shop-cart.component.html',
  styleUrls: ['./shop-cart.component.css']
})
export class ShopCartComponent implements OnInit{

  ngOnInit(): void {
    this.cartService.cart.subscribe((cart_:Cart) => {
      this.cart = cart_;
      this.dataSource = this.cart.items;
    })
  }

  constructor(private cartService: CartService) {}

  cart: Cart = { items: []};

  dataSource: Array<CartItem> = [];
  displayedColumns: Array<string> = [
    'product',
    'name',
    'price',
    'quantity',
    'total',
    'action'
  ]

  getTotal(items: Array<CartItem>): number {
    return this.cartService.getTotal(items);
  }

  onClearAll(): void {
      this.cartService.clearAll();
  }

  onRemoveItem(item: CartItem): void {
    this.cartService.removeItem(item);
  }

  onAddQuantity(item: CartItem): void {
    this.cartService.addToCart(item);
  }

  onRemoveQuantity(item: CartItem): void {
    this.cartService.removeQuantity(item);
  }
}
