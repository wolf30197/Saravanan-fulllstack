import { Component,Output ,EventEmitter} from '@angular/core';
import { GmailService } from './Components/service/gmail.service';
import { Router } from '@angular/router';
import { Gmail } from './Components/Interface/gmail';
import gmailData from './Components/gmaildata/gmaildata';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'GmailClone';
  public message=gmailData;
  public show:boolean=true;
  public display:boolean=false;


  constructor( ){

  }
   




}

