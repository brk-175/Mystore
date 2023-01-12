import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class BrandService {
  httpOptions = {
    headers: new HttpHeaders({
      token: sessionStorage['token'],
    }),
  };

  url = 'http://localhost:7100/brand';

  constructor(private http: HttpClient) {}

  getAllBrands() {
    return this.http.get(this.url, this.httpOptions);
  }
}
