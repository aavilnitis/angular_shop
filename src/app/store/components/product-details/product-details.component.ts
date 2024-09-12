import { Component, OnInit, Input } from '@angular/core';
import { Product } from '../../models/product';
import { ProductService } from '../../product.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

  @Input() product?: Product;
  selectedVariationId?: string = "";

  constructor(private productService: ProductService) { }

  ngOnInit() {
  }

  addToCart(product: Product): void{
    if(product.type === 'variable'){
      if(!this.selectedVariationId){
        alert('Please select a variation');
        return;
      } else {
        this.productService.addToCart(product, Number(this.selectedVariationId));
      }
    } else {
      this.productService.addToCart(product, product.id);
    }
  }

}
