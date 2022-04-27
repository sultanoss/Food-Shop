import { CartItem } from "./cartItem";

// this Cart Class has just a list of items (optional we can add more items)

export class Cart {
  items: CartItem[] = [];

  get totalPrice(): number {
    let totalPrice = 0;
    this.items.forEach(item =>{
      totalPrice += item.price
    });

    return totalPrice;
  }
}
