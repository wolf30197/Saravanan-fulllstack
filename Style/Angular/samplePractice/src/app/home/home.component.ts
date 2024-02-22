import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { SampleService } from '../service/sample.service';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{
  constructor(public service:SampleService){

  }
@Input()inputValue:string='';
@Output()outputValue=new EventEmitter<string>()
@Input()passData:string='';
@Output()getData=new EventEmitter<string>()
@Input()value:string='';
@Output()getPassingData=new EventEmitter<string>()
@Output()sendCompanyName=new EventEmitter<string>()
@Output()sendPlace=new EventEmitter<string>()
@Input()sendValue:string='';
@Output()sendState=new EventEmitter<string>()
public name='Saravanan';
public serviceDataPass!:string;
public place:string='Kozhikode';
public course:string='MEAN Stack Web Development';
public state='Kerala';
public company="Infosys Trivandrum";
public Infosys:string='Infosys is the only Indian firm in the top 100 of TIME Magazines list of Worlds Best Companies of 2023. The Bengaluru-based global consulting and IT services company ranked at the 64th spot out of 750 global companies with an overall score of 88.38.';
sendData():void{
this.outputValue.emit('hi guys');
}
ngOnInit(): void {
  console.log(this.passData);
}
passingData():void{
  this.getData.emit(this.course);
}
passValue():void{
  this.getPassingData.emit(this.name);
}
passCompanyName():void{
this.sendCompanyName.emit(this.company);
}
sendPlaceData():void{
  this.sendPlace.emit(this.place);
}
serviceData():void{
 this.serviceDataPass= this.service.sampleData;
}
serviceDataCompany():void{
  this.service.infosysDetail=this.Infosys;
}
sendStateValue():void{
this.sendState.emit(this.state);
}

}
