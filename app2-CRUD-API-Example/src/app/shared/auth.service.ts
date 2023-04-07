import {
  HttpClient,
  HttpErrorResponse,
  HttpHeaders,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoginResult } from '../models/login.model';
import { catchError, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  //api = 'http://13.90.224.87:8099/api';
  api = 'https://localhost:44355/api';
  headers = new HttpHeaders().set('Content-Type', 'application/json');
  constructor(private http: HttpClient) {}

  userLogin(userLogInData: LoginResult) {
    console.log(userLogInData);

    return this.http
      .post(this.api + '/Login/SignIn', userLogInData)
      .pipe(catchError(this.errorHandler));
  }

  getToken(): string {
    return localStorage.getItem('access_token')!;
  }
  setToken(token: string) {
    localStorage.setItem('access_token', token);
  }
  setUserDetails(user: LoginResult) {
    localStorage.setItem('user_details', JSON.stringify(user));
  }
  getUserDetails(): LoginResult {
    var userJsonString = localStorage.getItem('user_details');
    if (userJsonString == null || userJsonString == '') {
      //return undefined;
    }
    return JSON.parse(userJsonString!) as LoginResult;
  }
  logOut() {}
  errorHandler(err: HttpErrorResponse) {
    let msg = '';
    if (err.error instanceof ErrorEvent) {
      // client-side error
      msg = err.error.message;
    } else {
      // server-side error
      msg = `Error Code: ${err.status}\nMessage: ${err.message}`;
    }
    return throwError(msg);
  }
}
