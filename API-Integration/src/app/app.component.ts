import { Component, OnInit } from '@angular/core';
import {UsersDataService} from './services/users-data.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'API-Integration';
  users :any;
  constructor(private userData:UsersDataService)
  {
    // userData.users().subscribe((data)=>{
    //   // console.warn("Data:",data);
    //   this.users=data});
  }
  postData(data:any)
  {
    // console.warn(data);
    // this.userData.SaveUsers(data).subscribe((result)=>{
    //   console.warn(result);
    // })
  }
  ngOnInit()
   {
    this.getcustomerdata();
  }

  getcustomerdata()
  {
    this.userData.getData().subscribe(res=>{
      console.log(res);
    })
  }
}
