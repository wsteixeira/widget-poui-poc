import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class FluigService {
  constructor(private http: HttpClient) {}

  logout(): Observable<any> {
    const endpoint = '/portal/p/api/servlet/logout.do';

    return this.http.get<any>(endpoint);
  }
}
