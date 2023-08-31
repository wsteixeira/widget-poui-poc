import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { Buffer } from 'buffer';

@Injectable({
  providedIn: 'root',
})
export class ProtheusService {
  private readonly headers: HttpHeaders = new HttpHeaders({
    'X-PO-SCREEN-LOCK': 'true',
  });

  constructor(private http: HttpClient) {}

  login(params?: HttpParams): Observable<any> {
    const endpoint = '/api/oauth2/v1/token';

    return this.http.post(
      endpoint,
      {},
      { headers: this.headers, params: params }
    );
  }

  getResources(params?: HttpParams): Observable<any> {
    const endpoint = '/api/v1/conselhos/categoria/PR';
    const headers = this.getHeaders();

    return this.http.get<any>(endpoint, { headers: headers, params });
  }

  private getHeaders(): HttpHeaders {
    const username = 'conselhos_api';
    const password = 'cespub@123';
    const userAuth = Buffer.from(`${username}:${password}`).toString('base64'); // encode

    return new HttpHeaders({
      'X-PO-SCREEN-LOCK': 'true',
      Authorization: `Basic ${userAuth}`,
    });
  }
}
