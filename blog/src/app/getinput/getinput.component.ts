import { Component } from '@angular/core';

@Component({
  selector: 'app-getinput',
  templateUrl: './getinput.component.html',
  styleUrls: ['./getinput.component.css']
})
export class GetinputComponent {
  title: string = 'Get input Box value';
  displayValue = '';
  getinput(val: string) {
    console.warn(val);
    this.displayValue = val;
  }
}
