import { Component } from '@angular/core';
import loans from 'src/app/Constants/loan';
import { DemoServiceService } from 'src/services/demo-service.service';
@Component({
  selector: 'app-loans',
  templateUrl: './loans.component.html',
  styleUrls: ['./loans.component.css']
})
export class LoansComponent {
 public data=loans;
 constructor(private dService:DemoServiceService){
    this.Sdata();
 }
 public Sdata(){
  this.dService.student='Mouli'
  console.log(this.dService.student);
 }
}
