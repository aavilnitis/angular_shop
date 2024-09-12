import { Component, OnInit, Input } from '@angular/core';
import { Product } from '../../models/product';
import { ProductService } from '../../product.service';

@Component({
  selector: 'app-product-media',
  templateUrl: './product-media.component.html',
  styleUrls: ['./product-media.component.css']
})
export class ProductMediaComponent implements OnInit {

  @Input() product?: Product;

  constructor(private productService: ProductService) { }

  ngOnInit() {
  }

}
