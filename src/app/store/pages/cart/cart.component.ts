import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../product.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  cart: any[] = [];

  constructor(private productService: ProductService) { }

  ngOnInit() {
    this.productService.cart$.subscribe(cart => {
      this.cart = this.groupCartItems(cart);
    });
  }

  groupCartItems = (cart: any[]) => {
    return cart.reduce((acc, item) => {
      const key = `${item.id}-${item.selectedVariationId}`;
      if (!acc[key]) {
        acc[key] = { ...item, quantity: 0 };
      }
      acc[key].quantity += item.quantity;
      return acc;
    }, {});
  }

  decreaseQuantity = (item: any) => {
    const cart = this.productService.getCartFromLocalStorage();
    const index = cart.findIndex((i: any) => i.id === item.id && i.selectedVariationId === item.selectedVariationId);
    if (index !== -1) {
      cart[index].quantity -= 1;
      if (cart[index].quantity === 0) {
        cart.splice(index, 1);
      }
      this.productService.updateCartInLocalStorage(cart);
    }
  }

  increaseQuantity = (item: any) => {
    const cart = this.productService.getCartFromLocalStorage();
    const index = cart.findIndex((i: any) => i.id === item.id && i.selectedVariationId === item.selectedVariationId);
    if (index !== -1) {
      cart[index].quantity += 1;
      this.productService.updateCartInLocalStorage(cart);
    }
  }

  removeItem = (item: any) => {
    this.productService.removeFromCart(item.id, item.selectedVariationId);
  }

  goToCheckout = () => {
    window.location.href = '/store/checkout';
  }
}