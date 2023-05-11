import { Routes } from '@angular/router';
import { MainComponent } from './app/main/main.component';
import { ShopComponent } from './app/shop/shop.component';

export const appRoutes: Routes = [
  { path: 'shop', component: ShopComponent },
  { path: 'main', component: MainComponent },
  { path: '', redirectTo: '/main', pathMatch: 'full' },

];
