import { Component,Input,OnInit} from '@angular/core';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css']
})
export class MessageComponent {
  
 constructor(){
  
 }
  public showData:boolean=false;

  @Input() parentValue!:boolean;
  @Input() showValue:any;


  // Output property to emit the received value

  ngOnChanges() {
    // When the parentValue changes, update the receivedValue and emit the event
    this.showData=this.parentValue;
  }

}
