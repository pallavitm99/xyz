import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Location } from '../navbar-fields/location';

@Injectable({
  providedIn: 'root'
})
export class SearchService {
  searchURL="http://localhost:3000/search";

  constructor(private http:HttpClient) { }
  search():Observable<Location[]>{
     
    return this.http.get<Location[]>(this.searchURL);

 }
}
