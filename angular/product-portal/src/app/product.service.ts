import { Injectable } from '@angular/core';

@Injectable()
export class ProductService {
    getProducts(): string [] { 
        return ['Khakis','Jeans','Pizzas']; 
    }
}