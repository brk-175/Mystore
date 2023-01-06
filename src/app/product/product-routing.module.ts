import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './cart/cart.component';
import { GallaryComponent } from './gallary/gallary.component';

const routes: Routes = [
  { path: 'cart', component: CartComponent },
  { path: 'gallary', component: GallaryComponent },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductRoutingModule { }
