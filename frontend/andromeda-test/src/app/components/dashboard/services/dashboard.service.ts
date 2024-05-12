import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class DashboardServices {
  api = '';
  headers: HttpHeaders;

  constructor(private httpClient: HttpClient) {
    this.headers = new HttpHeaders();
    this.api = `${environment.apiUrl}:${environment.port}/${environment.endPoints}`;
  }

  findAllData() {
    return this.httpClient.get(`${this.api}api/dashboard`, {
      observe: 'response',
      responseType: 'json',
    });
  }
}
