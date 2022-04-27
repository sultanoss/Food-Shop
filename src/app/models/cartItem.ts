import { Food } from "./food";

export class CartItem {

  constructor(food: Food) {
    this.food = food
    // this.getPrice(); same like next line using seter/geter Method from Angular
    // we ca use the function like property
    this.price
  }

  food: Food;
  quantity: number = 1; // quantity is adefault option so we muss add it in contructor

  // get price same like getPrice()---seter/geter Method from Angular

  get price():number{
    return this.food.price * this.quantity
  }

}
