import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ProductRoutingModule } from './product-routing.module';
import { GallaryComponent } from './gallary/gallary.component';
import { CartComponent } from './cart/cart.component';

@NgModule({
  declarations: [GallaryComponent, CartComponent],
  imports: [CommonModule, ProductRoutingModule, FormsModule],
})
export class ProductModule {}
