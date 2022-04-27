import { Injectable } from '@angular/core';
import { sampleFoods } from 'src/data';
import { Food } from '../models/food';
import { Tag } from '../models/tag';


@Injectable({
  providedIn: 'root'
})
export class FoodService {

  constructor() { }


  getAll(): Food[] {

    return sampleFoods;
  }

  getAllFoodsBySearchTerm(searchTerm: String): Food[] {

    // toLowerCase for same results by writting LowerCase or UperCase  example( pizza = Pizza).

    return this.getAll().filter(food => food.name.toLowerCase().includes(searchTerm.toLowerCase()));

  }

  getAllFoodsByTag(tag: String): Food[] {

    // statement do job 1 : do job 2  same like if else => if tag = all return all else return getAll.filter

    return tag == 'All' ?
      this.getAll() :
      this.getAll().filter(food => food.tag?.includes(tag));
  }

  getAllTags(): Tag[] {

    // data normaly commes from server but hier hardcoded

    return [

      { name: 'All', count: 10 },
      { name: 'Vegatarian', count: 4 },
      { name: 'Healthy', count: 2 },
      { name: 'Sweets', count: 2 },
      { name: 'Sheap', count: 2 },
      { name: 'Fast Cooking', count: 1 },

    ]

  }

  getFoodById(id: number) : Food {

    return this.getAll().find(food => food.id == id)!; // adding ! that we make sure to not retur undifined
  }

}
