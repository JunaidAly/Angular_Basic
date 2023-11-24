import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { UserListComponent } from './user-list/user-list.component';
import { LoginListComponent } from './login-list/login-list.component';
import { SignupListComponent } from './signup-list/signup-list.component';
import { LoginComponent } from './login_module/login/login.component';
import { EventsComponent } from './events/events.component';
import { GetinputComponent } from './getinput/getinput.component';
import { CounterComponent } from './counter/counter.component';
import { PropertybindingComponent } from './propertybinding/propertybinding.component';
import { IfElseComponent } from './if-else/if-else.component';
import { ElseIfConditionComponent } from './else-if-condition/else-if-condition.component';
import { SwitchCaseComponent } from './switch-case/switch-case.component';
import { LoopsAngularComponent } from './loops-angular/loops-angular.component';
import { NestedLoopComponent } from './nested-loop/nested-loop.component';
import { StyleBindingComponent } from './style-binding/style-binding.component';
import { HeaderComponent } from './header/header.component';
import { BasicAngularFormComponent } from './basic-angular-form/basic-angular-form.component';
import {FormsModule} from '@angular/forms';
import { ToggoleElementComponent } from './toggole-element/toggole-element.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import { ChildComponentComponent } from './child-component/child-component.component';
import { ChildParentDataComponent } from './child-parent-data/child-parent-data.component';
import { TwoWayBindingComponent } from './two-way-binding/two-way-binding.component';
import { PipesComponent } from './pipes/pipes.component';
import { CustomPipePipe } from './pipes/custom-pipe.pipe';
import { TemplateDrivenFormsComponent } from './template-driven-forms/template-driven-forms.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import {ReactiveFormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    UserListComponent,
    LoginListComponent,
    SignupListComponent,
    LoginComponent,
    EventsComponent,
    GetinputComponent,
    CounterComponent,
    PropertybindingComponent,
    IfElseComponent,
    ElseIfConditionComponent,
    SwitchCaseComponent,
    LoopsAngularComponent,
    NestedLoopComponent,
    StyleBindingComponent,
    HeaderComponent,
    BasicAngularFormComponent,
    ToggoleElementComponent,
    TodoListComponent,
    ChildComponentComponent,
    ChildParentDataComponent,
    TwoWayBindingComponent,
    PipesComponent,
    CustomPipePipe,
    TemplateDrivenFormsComponent,
    ReactiveFormComponent,
   
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
