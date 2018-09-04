import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';  // 1.

import { routes } from './routes';  // 2. import const with array of pathes

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)  // 3. 
  ],
  exports: [ RouterModule ],  // 4.
  declarations: []
})
export class AppRoutingModule { }
