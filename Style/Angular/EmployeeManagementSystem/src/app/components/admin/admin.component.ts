import { Component ,OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { CanrouteService } from 'src/app/service/canroute.service';
import { Chart } from 'chart.js';
@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent {
  public hideData:boolean=true;
  public userCredential:any;
  constructor(public router:Router,public dataService:CanrouteService){

  }
  ngOnInit(){
      this.userCredential=this.dataService.loginUserData;
  };
showEmployeeForm(){
this.router.navigate(['employee-form']);
this.dataService.canRoute=true;
}
showEmployeeReport(){
  this.router.navigate(['employee-report']);
  this.dataService.canRoute=true;
}
showAssignTask(){
  this.router.navigate(['assigntask']);
  this.dataService.canRoute=true;
}



}
