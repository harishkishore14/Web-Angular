import { Component, Input } from '@angular/core';
import { Cart, CartItem } from '../shop-cart/shop-cart.model';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

 private cart_: Cart = { items: []};
 itemsQuantity = 0;

 @Input() 
 get cart(): Cart {
  return this.cart_;
 }

 set cart(cart: Cart) {
  this.cart_ = cart;

  this.itemsQuantity = cart.items
    .map((item) => item.quantity)
    .reduce((prev, current) => prev + current, 0);
 }
 
 constructor (private cartService: CartService) {}

 getTotal(items: Array<CartItem>): number {
  return this.cartService.getTotal(items);
 }
 
 onClearAll() {
  this.cartService.clearAll();
 }
}
