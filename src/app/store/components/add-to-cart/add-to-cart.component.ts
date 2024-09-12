import { Component, OnInit, Input } from '@angular/core';
import { Product } from '../../models/product';

@Component({
  selector: 'app-add-to-cart',
  templateUrl: './add-to-cart.component.html',
  styleUrls: ['./add-to-cart.component.css']
})
export class AddToCartComponent implements OnInit {

  @Input() label: string = 'Click Me';
  @Input() onClick: (product: Product) => void = () => {};

  constructor() { }

  ngOnInit(): void {
  }

}
