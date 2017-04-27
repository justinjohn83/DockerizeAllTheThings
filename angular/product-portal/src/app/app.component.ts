import { Component } from '@angular/core';
import { OnInit } from '@angular/core';

import { ProductService } from './product.service';
import { FoodService } from './food.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ProductService,FoodService]
})
export class AppComponent implements OnInit {
  title = 'Product Landing Page';
  products: string[];
  foods: string[];
  errorMessage: string;

  constructor(private productService: ProductService,
              private foodService: FoodService) {}

  // lifecycle hook method
  ngOnInit(): void {
    this.initProducts();
    this.initFoods();
  }

  private initProducts() : void {
    this.productService.getProducts()
                     .subscribe(
                       products => this.products = products,
                       error =>  this.errorMessage = <any>error);
  }

  private initFoods() : void {
    this.foodService.getFoods()
                     .subscribe(
                       foods => this.foods = foods,
                       error =>  this.errorMessage = <any>error);
  }
}
