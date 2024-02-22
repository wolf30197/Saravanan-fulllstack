import { Component } from '@angular/core';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent {
 public name:string='Saravanan'

 public printName():void{
  console.log(this.name);
 }
}
