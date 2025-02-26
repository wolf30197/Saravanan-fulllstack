import { Component } from '@angular/core';
import { CanrouteService } from './service/canroute.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'EmployeeManagementSystem';
constructor(public authenticate:CanrouteService){
  
  
}
public hidelogin:boolean=true;

}
