import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/Product.model';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css'],
})
export class ProductItemComponent implements OnInit {
  product!: Product;
  productQuantityForSales: number = 1;
  ngOnInit(): void {
    this.product = new Product(
      'Product 1',
      'this is product description',
      12,
      false
    );
  }
  setProductOnSales() {
    this.product.isOnSale = !this.product.isOnSale;
  }
  setQuantity(i: number) {}
}
