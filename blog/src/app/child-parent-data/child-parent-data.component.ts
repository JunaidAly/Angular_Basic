import { Component ,Output , EventEmitter} from '@angular/core';

@Component({
  selector: 'app-child-parent-data',
  templateUrl: './child-parent-data.component.html',
  styleUrls: ['./child-parent-data.component.css']
})
export class ChildParentDataComponent {
@Output() UpdateChildDataEvent = new EventEmitter<string>();
}
