import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Product Landing Page';
  products:string[];

  constructor() {
    this.products = ['Khakis','Jeans','Pizzas'];
  }
}
