import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class HoneyService {

  private honeyUrl = 'assets/data';  // URL to web api

  constructor(private http: HttpClient) { }


  /** GET heroes from the server */
  getProducts(): Observable<any[]> {
    return this.http.get<any[]>(this.honeyUrl + '/products.json')
      .pipe(

      );
  }

}
