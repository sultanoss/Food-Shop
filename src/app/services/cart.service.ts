import { NumberSymbol } from '@angular/common';
import { Injectable } from '@angular/core';
import { Cart } from '../models/cart';
import { CartItem } from '../models/cartItem';
import { Food } from '../models/food';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  private cart: Cart = new Cart; // we can put it also  in constructor

  constructor() { }

  addToCard(food: Food): void {
    let cartItem = this.cart.items.find(item => item.food.id == food.id); // check if cartItem exist
    if (cartItem) {
      this.changeQuantity(food.id, cartItem.quantity + 1);
      return // same like else but for better code
    }

    // if cartItem not found than creat a ne CartItem

    this.cart.items.push(new CartItem(food));
  }

  removeFromCart(foodId: number): void {

    //  retun all item do not have this foodId
    this.cart.items =
      this.cart.items.filter(item => item.food.id != foodId);
  }

  changeQuantity(foodId: number, quantity: number) {

    let cartItem = this.cart.items.find(item => item.food.id == foodId);
    if (!cartItem) return; // check if not  cartitem exist do nothing (no cartItem found to change Quantity)
    cartItem.quantity = quantity // if cartItem found change the quantity given by param quantity
  }

  getCart(): Cart {  // this function to return card after change quantity or delete
    return this.cart;
  }

}
