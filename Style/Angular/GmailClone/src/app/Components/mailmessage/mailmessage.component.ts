import { Component, OnInit } from '@angular/core';
import gmailData from '../gmaildata/gmaildata';
import { GmailService } from '../service/gmail.service';
import { Router } from '@angular/router';
import { Gmail } from '../Interface/gmail';
@Component({
  selector: 'app-mailmessage',
  templateUrl: './mailmessage.component.html',
  styleUrls: ['./mailmessage.component.css']
})
export class MailmessageComponent implements OnInit {
  public datas:Gmail;
  constructor(private mailMessageService:GmailService,private router:Router){

  }
 
   ngOnInit(): void {
     this.datas=this.mailMessageService.selectedMailMessage;
   }
  
  
}
