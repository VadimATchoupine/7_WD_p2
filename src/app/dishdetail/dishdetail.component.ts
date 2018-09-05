import { Component, OnInit, Input } from '@angular/core';

import { Dish } from '../shared/dish';
// import { DISHES } from '../shared/dishes';  // 2. Deleted previous code w/ JS objs description and Imported exportable constant DISHES w/ all data which were in deleted previous code

// 4.
import { DishService } from '../services/dish.service'; // nb
// 5. 
import { Params, ActivatedRoute } from '@angular/router'; // nb
// 6.
import { Location } from '@angular/common'; // nb



@Component({
  selector: 'app-dishdetail',
  templateUrl: './dishdetail.component.html',
  styleUrls: ['./dishdetail.component.scss']
})
export class DishdetailComponent implements OnInit {

  title = 'Comments';  // 1. internal var for interpolation

  // dish = DISHES[0]; // 3.1

  // Data Binding // 3.2
  // @Input()
  // dish: Dish;

  // 7 (3.3)
  dish: Dish;

  // 8
  constructor(private dishService: DishService,
              private route: ActivatedRoute,
              private location: Location) { }
  
  // 9
  ngOnInit() {
    const id = +this.route.snapshot.params['id']; // nb
    this.dish = this.dishService.getDish(id); // nb
  }

  // 10
  goBack(): void {  // nb
    this.location.back(); // nb
  }

}
