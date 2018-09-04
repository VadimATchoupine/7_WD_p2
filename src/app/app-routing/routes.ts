// 1.
import { Routes } from '@angular/router';

// 2.
import { MenuComponent } from '../menu/menu.component';
import { DishdetailComponent } from '../dishdetail/dishdetail.component';
import { HomeComponent } from '../home/home.component';
import { AboutComponent } from '../about/about.component';
import { ContactComponent } from '../contact/contact.component';

// 3.
export const routes: Routes = [
    // 4.
    { path: 'home',  component: HomeComponent },
    { path: 'menu',     component: MenuComponent },
    { path: '', redirectTo: '/home', pathMatch: 'full' }    // default path w/ redirection
];