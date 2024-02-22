import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { SampleService } from './service/sample.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  constructor(public route:Router,public service:SampleService){

  }
  title = 'samplePractice';
  public data!: string;
  public companyName!:string;
  public displayData!:string;
  public stateData!:string;
  public showData!:string;
  public showdata=false;
  public serviceValue!:string;
  public showContent=false;
  public company='ust global campus';
  public place:string='Trivandrum';
  public value=2;
  public TrivandrumCulture:string="Thiruvananthapuram is a major tourist centre, known for the Padmanabhaswamy Temple, the beaches of Kovalam and Varkala, the backwaters of Poovar and Anchuthengu and its Western Ghats tracts of Ponmudi and the Agastya Mala."
  showdiv(){
    this.showdata=true;
  }
  hidediv(){
    this.showdata=false;
  }
  showDetail(){
    this.showContent=true;
    this.showdata=false;
    
  }
  nextpage(){
    this.route.navigate(['/home']);
  }
  childEvent(event:string){
   this.data=event;
   console.log(this.data);
  }
getChildEvent(event:string){
  console.log(event);
  this.displayData=event;
}
getPassingDataEvent(event:string){
  console.log(event);
  this.showData=event;
}
getCompanyData(event:string){
  console.log(event);
  this.companyName=event;
}
showPlaceName(event:string){
  console.log(event);
}
sendServiceData():void{
  this.service.sampleData=this.TrivandrumCulture;
}
showServiceData():void{
  this.serviceValue=this.service.infosysDetail;
}
getStateData(event:string){
  this.stateData=event;
}

}
