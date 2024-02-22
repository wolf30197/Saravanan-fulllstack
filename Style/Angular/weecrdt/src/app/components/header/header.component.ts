import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DemoServiceService } from 'src/services/demo-service.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
constructor(private route:DemoServiceService,private router:Router){
   
}
public getPage(){
this.router.navigate(['credit']);
}
public getloan(){
  this.router.navigate(['loans'])
}

}
