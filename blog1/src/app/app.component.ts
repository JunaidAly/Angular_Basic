import { Component } from '@angular/core';
import {UserdataService} from './services/userdata.service'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  users:any;
  constructor(private userdata: UserdataService)
  {
    console.warn("User Data: ",userdata.users());
    this.users = this.userdata.users();
  }
}
