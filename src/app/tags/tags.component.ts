import { Component, Input, OnInit } from '@angular/core';
import { Tag } from '../models/tag';
import { FoodService } from '../services/food.service';

@Component({
  selector: 'app-tags',
  templateUrl: './tags.component.html',
  styleUrls: ['./tags.component.scss']
})
export class TagsComponent implements OnInit {

  @Input()
  foodPageTags?: String[];
  tags?: Tag[];

  constructor(private foodService: FoodService) { }

  ngOnInit(): void {
    if(!this.foodPageTags) // this is for the foodPageTags if not availble load all tags
    this.tags = this.foodService.getAllTags();
  }

}
