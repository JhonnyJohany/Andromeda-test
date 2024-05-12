import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class LoginServices {
  api = '';
  headers: HttpHeaders;

  constructor(private httpClient: HttpClient) {
    this.headers = new HttpHeaders();
    this.api = `${environment.apiUrl}:${environment.port}/${environment.endPoints}`;
  }

  login(login: any) {
    return this.httpClient.post(`${this.api}api/login`, login, {
      observe: 'response',
      responseType: 'text',
    });
  }
}
