import { Component,OnInit } from '@angular/core';
import { CanRouteService } from './service/can-route.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'login-Userform';
  constructor( private dataservice:CanRouteService){

  }
  public name:string='Name';

  ngOnInit():void{
     this.dataservice.getData().subscribe(data=>this.name=data);
  }
}
