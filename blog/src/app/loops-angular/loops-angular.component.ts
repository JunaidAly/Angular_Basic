import { Component } from '@angular/core';

@Component({
  selector: 'app-loops-angular',
  templateUrl: './loops-angular.component.html',
  styleUrls: ['./loops-angular.component.css']
})
export class LoopsAngularComponent {
title = 'Loops In Angular';
user = ['Junaid','Ali','Ahmed','Aliyan','Atif'];
userDetails = [
  {Name:'Anil', Age:13},
  {Name:'Asif', Age:18},
  {Name:'Atif', Age:18},
]
}
