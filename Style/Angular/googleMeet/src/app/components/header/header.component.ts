import { Component,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

constructor(){
  this.getday();

}
public popupview:boolean=false;

public weekday:string='';
  public  date=new Date()
  public hours=this.date.getHours()%12;
  public minutes= this.date.getMinutes();
  public clock=this.date.getHours()>=12 ?'PM':'AM';
  public getMonth =this. date.toLocaleString('default', {
    month: 'short',
    });
  public dates=this.date.getDate();
  public day =this.date.getDay();
  public daylist = ["Sun","Mon","Tue","Wed ","Thu","Fri","Sat"];
  public  getday(){
    console.log(this.daylist[this.day])
    this.weekday=this.daylist[this.day];
  }
  public popupShow(){
    this.popupview=true;
  }
 public hidePopupMessage(event:boolean):void{
    this.popupview=event;
 }

 
  

  
}
