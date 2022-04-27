import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Food } from '../models/food';
import { FoodService } from '../services/food.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  foods: Food[] = [];

  constructor(private foodService: FoodService, activatedRoute: ActivatedRoute) {

    // for showing the reault of search
    // we need activatedRoute
    // this function below means any time the params change call the function getAllFoodsBySearchTerm
    // this function means if is searchterm use function getAllFoodsBySearchTerm(filter Function) else show all Foods

    activatedRoute.params.subscribe((params) => {
      if (params.searchTerm)
        this.foods = this.foodService.getAllFoodsBySearchTerm(params.searchTerm);

      else if (params.tag)
        this.foods = this.foodService.getAllFoodsByTag(params.tag);

      else
        this.foods = foodService.getAll();
    })


  }

  ngOnInit(): void {
  }

}
