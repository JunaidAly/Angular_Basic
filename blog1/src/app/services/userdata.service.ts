import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserdataService {

  constructor() { }

  users(){
    return[
      {Name: 'Junaid Ali', Age: 13, Email: 'ajunaid131@gmail.com'},
      {Name: ' Ali', Age: 13, Email: 'Ali@gmail.com'},
      {Name: 'Ali', Age: 13, Email: 'Ahmed@gmail.com'},
    ]
  }
}
