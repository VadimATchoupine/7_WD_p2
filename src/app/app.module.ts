import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; // 1. Imported Angular Animation Module
import { NgModule } from '@angular/core';

import { MatToolbarModule } from '@angular/material/toolbar'; // 2. Imported Material Toolbar Module
import { MatListModule } from '@angular/material/list'; // 6. Imported Material List Module to use it in app
import { MatGridListModule } from '@angular/material/grid-list';  // 8. Imported Material Grid List Module
import { MatCardModule } from '@angular/material/card'; // 9. Imported Material Card Module
import { MatButtonModule } from '@angular/material/button'; // 10. Imported MAterial Button Module
import { FlexLayoutModule } from '@angular/flex-layout'; // 3. Imported Flex-Layout Module

import { AppRoutingModule } from './app-routing/app-routing.module'; // 16. 

import 'hammerjs'; // 4. Imported HammerJS

import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { DishdetailComponent } from './dishdetail/dishdetail.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';

import { DishService } from './services/dish.service'; // 14. imported service


@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    DishdetailComponent,
    HeaderComponent,
    FooterComponent,
    AboutComponent,
    HomeComponent,
    ContactComponent
  ],
  imports: [  // 5. updated JS object with modules which should be imported for root or AppModule component
    BrowserModule,
    BrowserAnimationsModule,  // 5.1
    MatToolbarModule,         // 5.2
    FlexLayoutModule,         // 5.3
    MatListModule,            // 7 updated JS object with MatList Module for my menu
    MatGridListModule,        // 11
    MatCardModule,            // 12
    MatButtonModule,          // 13
    AppRoutingModule          // 17.
  ],
  providers: [DishService], // 15. added service
  bootstrap: [AppComponent]
})
export class AppModule { }
