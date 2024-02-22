import { Component } from '@angular/core';
import { GmailService } from '../../service/gmail.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent {
  constructor(private gmailService:GmailService,private router:Router){

  }
  public viewmessageBox():void{
       this.router.navigate(['/messagebox']);
  }
}
