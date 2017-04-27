import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import {DataService} from './dataService.service'

@Injectable()
export class FoodService extends DataService {
    private url = 'http://localhost:10000/api/food';

    constructor (http: Http) {
      super(http);
    }

    getFoods(): Observable<string []> { 
      return this.getData(this.url);
    }
}