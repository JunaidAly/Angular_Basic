import { Component } from '@angular/core';
import {FormGroup,FormControl,Validators} from '@angular/forms';
@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent {
  loginForm = new FormGroup({
    user:new FormControl('',[Validators.required]),
    password:new FormControl('', [Validators.required , Validators.minLength(5)])
  })
title = "Reactive Form In Angular";
login_Form()
{
 console.warn(this.loginForm.value);
}

get user(){
  return this.loginForm.get('user');
}

get password(){
  return this.loginForm.get('password');
}
}
