import { Component } from '@angular/core';
import { Router } from '@angular/router';
import creditScore from 'src/app/Constants/creditScore';
import { DemoServiceService } from 'src/services/demo-service.service';
@Component({
  selector: 'app-credit-score',
  templateUrl: './credit-score.component.html',
  styleUrls: ['./credit-score.component.css']
})
export class CreditScoreComponent {
public creditScoreData=creditScore;
constructor(private demo:DemoServiceService,private router:Router){
this.getData();
}

public getData(){
  this.demo.student='Santhosh'
console.log(this.demo.student);
}
}

