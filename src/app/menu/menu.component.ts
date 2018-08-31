import { Component, OnInit } from '@angular/core';

import { Dish } from '../shared/dish'; // 1. Imported created previously importable class Dish

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  /* ---------------------------------------------------------- */
  // 2. TEMP - create a array with JS objects related to previously created TS class Dish
  dishes: Dish[] = [
    // 1st/4 JS object
    {
      name: 'Uthappizza',
      image: '/assets/images/uthappizza.png',
      category: 'mains',
      label: 'Hot',
      price: '4.99',
      // tslint:disable-next-line:max-line-length // WTF??????
      description: 'A unique combination of Indian Uthappam (pancake) and Italian pizza, topped with Cerignola olives, ripe vine cherry tomatoes, Vidalia onion, Guntur chillies and Buffalo Paneer.'
    },
    // 2nd/4 JS object
    {
      name: 'Zucchipakoda',
      image: '/assets/images/zucchipakoda.png',
      category: 'appetizer',
      label: '',
      price: '1.99',
      description: 'Deep fried Zucchini coated with mildly spiced Chickpea flour batter accompanied with a sweet-tangy tamarind sauce'
    },
    // 3rd/4 JS object
    {
      name: 'Vadonut',
      image: '/assets/images/vadonut.png',
      category: 'appetizer',
      label: 'New',
      price: '1.99',
      description: 'A quintessential ConFusion experience, is it a vada or is it a donut?'
    },
    // 4th/4 JS object
    {
      name: 'ElaiCheese Cake',
      image: '/assets/images/elaicheesecake.png',
      category: 'dessert',
      label: '',
      price: '2.99',
      description: 'A delectable, semi-sweet New York Style Cheese Cake, with Graham cracker crust and spiced with Indian cardamoms'
    }
  ];
  /* ---------------------------------------------------------- */

  constructor() { }

  ngOnInit() {
  }

}
