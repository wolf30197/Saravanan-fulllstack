import { Component,Input } from '@angular/core';

@Component({
  selector: 'app-message-text',
  templateUrl: './message-text.component.html',
  styleUrls: ['./message-text.component.css']
})
export class MessageTextComponent {
constructor(){

}
@Input()inputData:any;
}
