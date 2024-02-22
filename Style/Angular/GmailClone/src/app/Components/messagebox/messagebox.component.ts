import { Component,Input, OnInit,Output ,EventEmitter} from '@angular/core';
import { Router } from '@angular/router';
import gmailData from '../gmaildata/gmaildata';
import { GmailService } from '../service/gmail.service';
import { Gmail } from '../Interface/gmail';
@Component({
  selector: 'app-messagebox',
  templateUrl: './messagebox.component.html',
  styleUrls: ['./messagebox.component.css']
})
export class MessageboxComponent  {
  public message=gmailData;
  
constructor(private gmailService:GmailService,private router:Router){

}
public viewMessage(datas:Gmail):void{
    this.gmailService.selectedMailMessage=datas;
    this.router.navigate(['/mailmessage']);
}
 

}
