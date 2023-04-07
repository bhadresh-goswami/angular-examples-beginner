import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Root } from 'src/app/models/que.model';
import { AuthService } from 'src/app/shared/auth.service';

@Injectable({
  providedIn: 'root',
})
export class QuestionService {
  //baseUrl = 'http://13.90.224.87:8099/api';
  baseUrl = 'https://localhost:44355/api';
  headers = new HttpHeaders().set('Content-Type', 'application/json');
  constructor(private http: HttpClient, private authService: AuthService) {}
  postQuestion(que: Root) {
    let api_key = this.authService.getToken();
    this.headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: `Bearer ${api_key}`,
    });
    console.log(this.headers);

    return this.http.post(this.baseUrl + '/Questions/AddQuestion', que, {
      headers: this.headers,
    });
  }
  getQuestions() {
    let api_key = this.authService.getToken();
    this.headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: `Bearer ${api_key}`,
    });
    console.log(this.headers);
    let queryParams = new HttpParams();
    queryParams = queryParams.append('pageIndex', 1);
    queryParams = queryParams.append('pageSize', 10);
    return this.http.get(`${this.baseUrl}/Questions/GetExamQuestionListAsync`, {
      headers: this.headers,
      params: queryParams,
    });
  }
}
