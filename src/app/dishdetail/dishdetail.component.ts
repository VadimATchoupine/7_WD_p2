import { Component, OnInit, Input } from '@angular/core';

import { Dish } from '../shared/dish';
// import { DISHES } from '../shared/dishes';  // 2. Deleted previous code w/ JS objs description and Imported exportable constant DISHES w/ all data which were in deleted previous code

@Component({
  selector: 'app-dishdetail',
  templateUrl: './dishdetail.component.html',
  styleUrls: ['./dishdetail.component.scss']
})
export class DishdetailComponent implements OnInit {

  title = 'Comments';  // 1. internal var for interpolation

  // dish = DISHES[0]; // 3. 

  // Data Binding
  @Input()
  dish: Dish;

  constructor() { }

  ngOnInit() {
  }

}
