import { Component, OnInit } from '@angular/core';

import { Dish } from '../shared/dish'; // 1. Imported created previously importable class Dish
import { DISHES } from '../shared/dishes'; // 2. Deleted previous code w/ JS objs description and Imported exportable constant DISHES w/ all data which were in deleted previous code


@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  // dishes = DISHES; // 3.a TypeScript will get it what type are we using there, but It would be more clear for me to use another approach 
  dishes: Dish[] = DISHES; // 3.b

  // selectedDish: Dish = DISHES[0]; // 4. or selectedDish = DISHES[0];
  selectedDish: Dish;  // 5. 

  constructor() { }

  ngOnInit() {
  }

  // 6. METHODS
  // 6.1 onSelect method
  onSelect(dish: Dish) {
    this.selectedDish = dish;
  }

}
