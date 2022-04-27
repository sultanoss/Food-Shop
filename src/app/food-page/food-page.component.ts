import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Food } from '../models/food';
import { CartService } from '../services/cart.service';
import { FoodService } from '../services/food.service';

@Component({
  selector: 'app-food-page',
  templateUrl: './food-page.component.html',
  styleUrls: ['./food-page.component.scss']
})
export class FoodPageComponent implements OnInit {

  food!: Food;

  constructor(private activatedRoute: ActivatedRoute,
    private foodService: FoodService,
    private cartService:CartService,
    private router:Router ) {

    activatedRoute.params.subscribe((params) => {
      if(params.id)
      this.food = foodService.getFoodById(params.id);
    })
  }

  ngOnInit(): void {
  }

  addToCart(){
    this.cartService.addToCard(this.food);
    this.router.navigateByUrl('/cart-page');
  }

}
