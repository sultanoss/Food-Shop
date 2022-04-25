import { Injectable } from '@angular/core';
import { sampleFoods } from 'src/data';
import { Food } from '../models/food';


@Injectable({
  providedIn: 'root'
})
export class FoodService {

  constructor() { }


  getAll():Food[]{

    return sampleFoods;
  }

  getAllFoodsBySearchTerm(searchTerm:String){

    // toLowerCase for same results by writting LowerCase or UperCase  example( pizza = Pizza).

    return this.getAll().filter(food => food.name.toLowerCase().includes(searchTerm.toLowerCase()));

  }

}
