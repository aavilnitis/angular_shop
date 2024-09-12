import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {
  cartItems: { name: string, quantity: number, price: number }[] = [];
  total: number = 0;

  constructor() { }

  ngOnInit() {
    this.cartItems = JSON.parse(localStorage.getItem('cart') || '[]');
    this.calculateTotal();
  }

  calculateTotal() {
    this.total = this.cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
  }

  checkout(form: NgForm) {
    if (form.valid) {
      const formData = form.value;
      console.log('Form Data:', formData);
      // Save the form data to localStorage or send it to a server
      localStorage.setItem('checkoutForm', JSON.stringify(formData));
      alert('Checkout successful!');
    } else {
      alert('Please fill out all required fields.');
    }
  }
}