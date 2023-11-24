import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class UsersDataService {
  // url = 'https://catfact.ninja/fact';
  constructor(private http:HttpClient) { }

  // users()
  // {
  //   return this.http.get(this.url);
  // }

  // SaveUsers(data:any)
  // {
  //   return this.http.post(this.url,data);
  // }

  getData() 
  {
 return   this.http.get('http://127.0.0.1/customer')
  }

}
