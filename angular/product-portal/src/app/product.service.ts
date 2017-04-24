import { Injectable } from '@angular/core';

@Injectable()
export class ProductService {
    getProducts(): Promise<string []> { 
        return Promise.resolve(['Khakis','Jeans','Pizzas']); 
    }
}