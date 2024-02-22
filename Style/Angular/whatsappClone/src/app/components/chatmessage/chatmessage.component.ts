import { Component,EventEmitter,Input,Output ,} from '@angular/core';

@Component({
  selector: 'app-chatmessage',
  templateUrl: './chatmessage.component.html',
  styleUrls: ['./chatmessage.component.css']
})
export class ChatmessageComponent {
  @Input() personData: any;
  @Input () getpersonData:any;
  public hideValue:boolean=false;
  public clickedValue!: boolean;
  handleDivClick(): void {
    this.clickedValue = true;
  }
}
