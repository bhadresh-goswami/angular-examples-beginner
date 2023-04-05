import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient) {}
  getData() {
    return this.http.get('http://localhost:3000/api/v1/auth/data');
  }
}
