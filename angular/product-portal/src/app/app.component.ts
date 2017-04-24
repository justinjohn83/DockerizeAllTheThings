import { Component } from '@angular/core';
import { OnInit } from '@angular/core';

import { ProductService } from './product.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ProductService]
})
export class AppComponent implements OnInit {
  title = 'Product Landing Page';
  products:string[];

  constructor(private productService: ProductService) {
    //
  }

  // lifecycle hook method
  ngOnInit(): void {
    this.initProducts();
  }

  private initProducts() : void {
     this.products = this.productService.getProducts();
  }
}
