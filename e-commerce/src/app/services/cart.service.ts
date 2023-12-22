import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Cart, CartItem } from '../shop-cart/shop-cart.model';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  cart = new BehaviorSubject<Cart>({ items: [] });

  constructor(private snackbar: MatSnackBar) { }

  addToCart(item: CartItem) {
    const items = [...this.cart.value.items];
    
    const itemInCart = items.find((item_) => item_.id === item.id);

    if (itemInCart) {
      itemInCart.quantity += 1;
    } else {
      items.push(item);
    }
    this.cart.next({ items });
    this.snackbar.open('1 item added to cart.', 'OK', {duration: 5000});
    console.log(this.cart.value);
  }

  getTotal(items: Array<CartItem>): number {
    return items.
    map((item) => item.price * item.quantity)
    .reduce((prev, current) => prev + current, 0)
  }

  clearAll(): void {
    this.cart.next({ items: [] });
    this.snackbar.open('Cart is cleared', 'OK', { duration: 5000 });
  }

  removeItem(item: CartItem, update = true): Array<CartItem> {
    const filteredItems = this.cart.value.items.filter(
      (item_) => item_.id !== item.id
    );

    if (update) {
      this.cart.next({ items: filteredItems });
      this.snackbar.open('1 item removed from cart', 'OK', { duration: 5000 });
    }

    return filteredItems;
  }

  removeQuantity(item: CartItem): void {
    let itemForRemoval: CartItem | undefined;
    
    let filteredItems = this.cart.value.items.map((item_) => {
      if (item_.id === item.id) {
        item_.quantity--;

        if(item_.quantity === 0) {
          itemForRemoval = item_;
        }
      }

      return item_;
    });

    if (itemForRemoval) {
      filteredItems = this.removeItem(itemForRemoval, false);
    }

    this.cart.next({ items: filteredItems });
    this.snackbar.open('1 item removed from cart', 'OK', { duration: 5000 });
  }
}
