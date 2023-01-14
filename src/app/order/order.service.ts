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

  placeOrder(addressId: number) {
    const body = {
      addressId,
    };
    return this.http.post(this.url, body, this.httpOptions);
  }
}
