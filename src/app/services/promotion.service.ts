import { Injectable } from '@angular/core';

// 1. class
import { Promotion } from '../shared/promotion';
// 2. const
import { PROMOTIONS } from '../shared/promotions';

@Injectable({
  providedIn: 'root'
})
export class PromotionService {

  constructor() { }

  // 3. functionality
  // 3.1.
  getPromotions(): Promotion[] {
    return PROMOTIONS;
  }
  // 3.2.
  getPromotion(id: number): Promotion {
    return PROMOTIONS.filter((promo) => (promo.id === id))[0];
  }
  // 3.3.
  getFeaturedPromotion(): Promotion {
    return PROMOTIONS.filter((promotion) => promotion.featured)[0];
  }

}
