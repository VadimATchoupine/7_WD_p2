import { Component, OnInit } from '@angular/core';

import { Dish } from '../shared/dish'; // 1. Imported created previously importable class Dish

import { DishService } from '../services/dish.service'; // 7. Imported serivce to fetch needed data from shared foulder (constant JS objects with dishes). Deleted Import statement with DISHES from dishes.ts, because service will do all job for me.

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  // dishes = DISHES; // 3.a TypeScript will get it what type are we using there, but It would be more clear for me to use another approach 
  // dishes: Dish[] = DISHES; // 3.b
  dishes: Dish[]; // 9. Dont neet 3.b. scince i'm using service

  // selectedDish: Dish = DISHES[0]; // 4. or selectedDish = DISHES[0];
  selectedDish: Dish;  // 5. 

  constructor(private dishService: DishService) { } // 8. created a one single dish service object which will be available for me whithin this component 

  ngOnInit() {
    this.dishes = this.dishService.getDishes();
  }

  // 6. METHODS
  // 6.1 onSelect method
  onSelect(dish: Dish) {
    this.selectedDish = dish;
  }

}
