import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class OrderService {
  httpOptions = {
    headers: new HttpHeaders({
      token: sessionStorage['token'],
    }),
  };

  url = 'http://localhost:7100/order';

  constructor(private http: HttpClient) {}

  getOrders() {
    return this.http.get(this.url, this.httpOptions);
  }

  cancelOrder(id: number) {
    return this.http.delete(this.url + '/cancel/' + id, this.httpOptions);
  }

  placeOrder(addressId: number) {
    const body = {
      addressId,
    };
    return this.http.post(this.url, body, this.httpOptions);
  }
}
