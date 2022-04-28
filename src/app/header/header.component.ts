import { Component, OnInit } from '@angular/core';
import { CartItem } from '../models/cartItem';
import { CartService } from '../services/cart.service';
import { Cart } from '../models/cart';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(private cartService: CartService) {
    this.setCart()
  }

  cart!: Cart

  ngOnInit(): void {
  }

  setCart() { // get the cart from cartService and put it in cart
    this.cart = this.cartService.getCart();
  }

}
