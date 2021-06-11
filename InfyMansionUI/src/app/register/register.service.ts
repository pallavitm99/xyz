
import { Observable } from 'rxjs';
import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  registerUrl = "http://localhost:3000/register"
  constructor(private http: HttpClient) { }

  register(registerForm):Observable<string>{
    return <Observable<string>> this.http.post(this.registerUrl,registerForm)
  }
}
