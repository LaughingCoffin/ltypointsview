import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

//import { Observable, of, Subject } from 'rxjs';
//import 'rxjs/add/operator/map';

import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  //constructor(private httpClient: HttpClient) { }
  constructor(private http:Http) { }

  baseUrl  : string = "http://localhost:3000/";
  // firstClick(){
  //  return console.log('responding from service');
  // }

  getUsers(){
    return this.http.get(this.baseUrl);
  }
  checkByCredential(userid: string, password: string) {
    const user = { username: userid, password: password };
    return this.http
       .post('http://localhost:8080/checkByCredential', user) 
       .map(result => result.json());
     } 
}
