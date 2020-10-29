import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http:HttpClient) { }

  signUp(data){
    return this.http.post('http://localhost:3000/signUp',data);
  }
  signIn(data){
    console.log(data);
    return this.http.post('http://localhost:3000/signIn',data);
  }
}
