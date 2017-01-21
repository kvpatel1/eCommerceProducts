import { Component, OnInit } from '@angular/core';
import { CurrencyPipe } from '@angular/common';
import { Product } from './product';
import { ProductsService } from './products.service';

@Component({
  selector: 'app-root',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
  providers: [ProductsService]
})
export class ProductsComponent implements OnInit {
  products: Product[];

  constructor(private productsService: ProductsService) { }

  getProducts(): void {
    // Mock data
    //this.productsService.getMockProducts().then(p => this.products = p);

    // Production data
    this.productsService.getProducts().subscribe(p => this.products = p);
  }

  ngOnInit() {
    this.getProducts();
  }

}
