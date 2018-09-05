import { Injectable } from '@angular/core';

// 1. Import class
import { Dish } from '../shared/dish';
// 2. Import constant w/ JS objects
import { DISHES } from '../shared/dishes';

@Injectable({
  providedIn: 'root'
})
export class DishService {

  constructor() { }

  // 3. Functionality of this service
  // 3.1. method getDish
  getDishes(): Dish[] {
    return DISHES;
  }
  // 3.2. method getDish by ID
  getDish(id: number): Dish {
    return DISHES.filter((dish) => (dish.id === id))[0];
  }
  // 3.3. method getFeaturedDish
  getFeaturedDish(): Dish {
    return DISHES.filter((dish) => dish.featured)[0];
  }

}
