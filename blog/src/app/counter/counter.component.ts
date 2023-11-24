import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent {
  title ='Counter with Angular';
count =0;
getcount(type: string){
type==='add'? this.count++:this.count--;
}
}
