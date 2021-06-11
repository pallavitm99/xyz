import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UserData } from '../navbar-fields/userdata';

@Injectable({
  providedIn: 'root'
})
export class SellerProfileService {
url = 'http://localhost:3000/user/profile/';
  constructor(private http: HttpClient) { }
  data(userId): Observable<UserData[]>{
    return this.http.get<UserData[]>(this.url + userId);
  }

}
