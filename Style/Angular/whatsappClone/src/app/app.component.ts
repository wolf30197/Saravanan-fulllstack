import { Component,OnChanges } from '@angular/core';
import { Event } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'whatsappClone';
  
  constructor(){

  }
  public displayData:any;
  public hide:boolean=false;

}
