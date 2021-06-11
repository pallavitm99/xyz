import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  loginUrl = "http://localhost:3000/login"

  constructor(private http: HttpClient) { }

  // to access the user that is already regisetered

  login(loginForm: any): Observable<any>{
    return this.http.post(this.loginUrl, loginForm) as Observable<String>;
  }
}
