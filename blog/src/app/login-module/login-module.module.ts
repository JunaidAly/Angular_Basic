import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from '../login_module/login/login.component';



@NgModule({
  declarations: [
    
  ],
  exports:[
  LoginComponent
  ],
  imports: [
    CommonModule
  ]
})
export class LoginModuleModule { }
