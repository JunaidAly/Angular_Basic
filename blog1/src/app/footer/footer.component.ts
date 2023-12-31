import { Component } from '@angular/core';
import {UserdataService} from '../services/userdata.service';
@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {
  users:any;
  constructor(private userdata: UserdataService)
  {
    console.warn("User Data: ",userdata.users());
    this.users = this.userdata.users();
  }
}
