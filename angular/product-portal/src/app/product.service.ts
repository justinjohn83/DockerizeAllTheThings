import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import {DataService} from './dataService.service'

@Injectable()
export class ProductService extends DataService {
    private productsUrl = 'http://localhost:10000/api/Product';
    //private productsUrl = 'assets/products.json';

    constructor (http: Http) {
      super(http);
    }

    getProducts(): Observable<string []> { 
      return this.getData(this.productsUrl);
    }
}