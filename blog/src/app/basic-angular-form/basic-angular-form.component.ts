import { Component } from '@angular/core';
import {NgForm} from '@angular/forms'
@Component({
  selector: 'app-basic-angular-form',
  templateUrl: './basic-angular-form.component.html',
  styleUrls: ['./basic-angular-form.component.css']
})
export class BasicAngularFormComponent {
title = 'Basic Forms';
userData : any = {};
getdata(data : NgForm){
this.userData = data;
}
}
