import { Component } from '@angular/core';

@Component({
  selector: 'app-template-driven-forms',
  templateUrl: './template-driven-forms.component.html',
  styleUrls: ['./template-driven-forms.component.css']
})
export class TemplateDrivenFormsComponent {
title = "Template Driven Forms";
data:any = '';
get_data(item: any)
{
 console.warn(item);
 this.data = item;
}
}
