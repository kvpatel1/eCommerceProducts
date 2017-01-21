import { Injectable } from '@angular/core';
import { Product } from './product';
import { PRODUCTS } from './mock-products';
import { Http, Response, Headers } from '@angular/http';
import { Observable } from 'rxjs/Rx';

@Injectable()
export class ProductsService {

  constructor(private http: Http) { }

  getMockProducts(): Promise<Product[]> {
    return Promise.resolve(PRODUCTS);
  }

  getProducts(): Observable<Product[]> {
    var url = 'https://search-fittery-challenge-pv7vc3ugoko5hngpgxdh4szuqm.us-east-1.es.amazonaws.com/items/_search?size=12';
    return this.http.get(url)
      .map(this.extractData)
      .catch(this.handleError);
  }

  private extractData(res:Response): Product[] {
    let body = res.json();
    var prods: Product[] = [];

    for (let hit in body.hits.hits){
      var item = body.hits.hits[hit]._source;
      var prod = new Product();
      prod.id = item.id;
      prod.name = item.item_name;
      prod.price = item.item_price;
      prod.image = item.image;
      prods.push(prod);
    }

    return prods;
  }

  private handleError(error: Response | any) {
    return Observable.throw(error);
  }

}
