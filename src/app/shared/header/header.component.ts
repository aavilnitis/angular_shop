import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { ProductService } from '../../store/product.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit, OnDestroy {
  cartItemsCount: number = 0;
  private cartSubscription!: Subscription;

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.cartSubscription = this.productService.cart$.subscribe(cart => {
      this.updateCartItemsCount(cart);
    });
  }

  ngOnDestroy(): void {
    if (this.cartSubscription) {
      this.cartSubscription.unsubscribe();
    }
  }

  updateCartItemsCount(cart: any[]): void {
    // Calculate the total number of items in the cart
    this.cartItemsCount = cart.reduce((count: number, item: any) => count + (item.quantity || 1), 0);
  }
}