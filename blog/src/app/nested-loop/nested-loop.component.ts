import { Component } from '@angular/core';

@Component({
  selector: 'app-nested-loop',
  templateUrl: './nested-loop.component.html',
  styleUrls: ['./nested-loop.component.css']
})
export class NestedLoopComponent {
title ='Nested Loop';
users = [
  {Name:'Anil',Age:13,accountdetails:['facebook','whatsapp']},
  {Name:'Asif',Age:18,accountdetails:['yahoo','insta']},
  {Name:'Atif',Age:18,accountdetails:['gmail','telegram']},
]
}
