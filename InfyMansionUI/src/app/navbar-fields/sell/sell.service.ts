import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class SellService {
  sellURL="http://localhost:3000/sell/"
  roleurl="http://localhost:3000/role/"

  constructor(private http: HttpClient) { }

  sellProperty(data: any): Observable<any>{
    const userId = sessionStorage.getItem('userId');
    return this.http.post(this.sellURL + userId, data) as Observable<any>;

  }
  // to post the userId as a seller
  roleput(userId): Observable<any>{
    return this.http.get(this.roleurl + userId) as Observable<any>;
  }
}
