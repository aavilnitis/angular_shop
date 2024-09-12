import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from './models/product';
import { Observable, BehaviorSubject } from 'rxjs';

const PRODUCT_API = 'http://localhost:3000/products';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private cartSubject = new BehaviorSubject<any[]>(this.getCartFromLocalStorage());
  cart$ = this.cartSubject.asObservable();

  constructor(private http: HttpClient) { }

  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(PRODUCT_API);
  }

  getProduct(id: number): Observable<Product> {
    return this.http.get<Product>(`${PRODUCT_API}/${id}`);
  }

  addToCart(product: Product, selectedVariationId: number): void {
    const cart = this.getCartFromLocalStorage();

    // Check if the product or variation is already in the cart
    const existingItemIndex = cart.findIndex((item: any) => 
      item.id === product.id && item.selectedVariationId === selectedVariationId
    );

    if (existingItemIndex !== -1) {
      // If the item is already in the cart, update the quantity
      cart[existingItemIndex].quantity = (cart[existingItemIndex].quantity || 1) + 1;
    } else {
      // Add the product or variation to the cart
      const object = { ...product, selectedVariationId, quantity: 1 };
      cart.push(object);
    }

    // Save the updated cart to localStorage
    this.updateCartInLocalStorage(cart);
  }

  removeFromCart(productId: number, selectedVariationId: number): void {
    const cart = this.getCartFromLocalStorage();
    const index = cart.findIndex((item: any) => item.id === productId && item.selectedVariationId === selectedVariationId);
    if (index !== -1) {
      cart.splice(index, 1);
      this.updateCartInLocalStorage(cart);
    }
  }

  updateCartInLocalStorage(cart: any[]): void {
    localStorage.setItem('cart', JSON.stringify(cart));
    this.cartSubject.next(cart); // Notify subscribers
  }

  getCartFromLocalStorage(): any[] {
    const cartString = localStorage.getItem('cart') ?? '[]';
    return JSON.parse(cartString);
  }
}