import { Component } from '@angular/core';

@Component({
  selector: 'app-toggole-element',
  templateUrl: './toggole-element.component.html',
  styleUrls: ['./toggole-element.component.css']
})
export class ToggoleElementComponent {
  display = false;
  title = 'Toggle Element';
  toggle_function(){
    this.display = !this.display;
  }
}
