import { Component } from '@angular/core';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent {
title = 'My Todo List';
list:any[]=[];
AddTask(item:string){

this.list.push({id:this.list.length, name:item})
console.warn(this.list);
}
delete_item(id:number){
this.list = this.list.filter(item=>item.id!==id);
}
}
