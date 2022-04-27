import { Component, OnInit } from '@angular/core';
import { Cart } from '../models/cart';
import { CartItem } from '../models/cartItem';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-cart-page',
  templateUrl: './cart-page.component.html',
  styleUrls: ['./cart-page.component.scss']
})
export class CartPageComponent implements OnInit {

  cart!: Cart

  constructor(private cartService: CartService) {
    this.setCart()
  }

  ngOnInit(): void {
  }

  setCart() { // get the cart from cartService and put it in cart
    this.cart = this.cartService.getCart();
  }

  removeFromCart(cartItem: CartItem) {
    this.cartService.removeFromCart(cartItem.food.id);
    this.setCart(); // to refresh the cart content
  }

  changeQuantity(cartItem: CartItem, quantityInString: string) {
    const quatity = parseInt(quantityInString);
    this.cartService.changeQuantity(cartItem.food.id, quatity);
    this.setCart();
  }

}
