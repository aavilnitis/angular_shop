import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArchiveComponent } from './pages/archive/archive.component';
import { SingleProductComponent } from './pages/single-product/single-product.component';
import { StoreRoutingModule } from './store-routing.module';
import { SharedModule } from '../shared/shared.module';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { ProductMediaComponent } from './components/product-media/product-media.component';
import { FormsModule } from '@angular/forms';
import { CartComponent } from './pages/cart/cart.component';
import { CheckoutComponent } from './pages/checkout/checkout.component';

@NgModule({
  declarations: [
    ArchiveComponent,
    SingleProductComponent,
    ProductDetailsComponent,
    ProductMediaComponent,
    CartComponent,
    CheckoutComponent
  ],
  imports: [
    CommonModule,
    StoreRoutingModule,
    SharedModule,
    FormsModule
  ]
})
export class StoreModule { }