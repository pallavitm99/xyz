import { Injectable } from '@angular/core';
import { PropertyData } from '../property';
import { UserData } from '../userdata';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Location } from '../location';

@Injectable({
  providedIn: 'root'
})
export class BuyService {
  url1 = 'http://localhost:3000/buy'
  url2 = 'http://localhost:3000/view/'
  url3 = 'http://localhost:3000/get'
  url4 = 'http://localhost:3000/search'
  url5 = "http://localhost:3000/update/"
  url = "http://localhost:3000/wishlist/"

  constructor(private http: HttpClient) { }
// to get all property data
  buy(): Observable<PropertyData[]>{
    return  this.http.get(this.url1) as Observable<PropertyData[]>;
  }
  //to get the property data of the specified property Id
  view(propertyId):Observable<PropertyData[]>{
    
   console.log(<Observable<PropertyData[]>> this.http.get(this.url2+propertyId));
     return <Observable<PropertyData[]>> this.http.get(this.url2+propertyId);
  }
  // to get all the user data
  getuserdata(): Observable<UserData[]>{
    return this.http.get(this.url3) as Observable<UserData[]>;
  }
  // to get the location array
  property_location(): Observable<Location[]>{
    return this.http.get(this.url4) as Observable<Location[]>;
  }

  // to add to wishlist
  checkWish(uid, pid, state): Observable<any> {
    // console.log(this.url5 + uid + "/" + pid + "/" + state)
    return this.http.get(this.url5 + uid + '/' + pid + '/' + state) as Observable<any>;
  }
  // to access the wishlisted property
  wish(userId): Observable<PropertyData[]>{
    return this.http.get(this.url + userId) as Observable<PropertyData[]>;
  }
}
