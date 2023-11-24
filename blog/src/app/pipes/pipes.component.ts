import { Component } from '@angular/core';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.css']
})
export class PipesComponent {
title = "Pipes In Angular";
date = Date();
user = {name: 'Junaid Ali', Age : 30}
}
