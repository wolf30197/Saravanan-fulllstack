import { Component,Input} from '@angular/core';

@Component({
  selector: 'app-messageheader',
  templateUrl: './messageheader.component.html',
  styleUrls: ['./messageheader.component.css']
})
export class MessageheaderComponent {
  constructor(){

  }
  @Input()getValue:any;

}
