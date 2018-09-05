import { Component, OnInit } from '@angular/core';

// 1. Imports
import { Dish } from '../shared/dish';
import { DishService } from '../services/dish.service';
import { Promotion } from '../shared/promotion';
import { PromotionService } from '../services/promotion.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  // 2. Variables
  dish: Dish;
  promotion: Promotion;
  
  // 3.
  constructor(private dishService: DishService,
              private promotionService: PromotionService) { }

  // 4.
  ngOnInit() {
    this.dish = this.dishService.getFeaturedDish();
    this.promotion = this.promotionService.getFeaturedPromotion();
  }

}
