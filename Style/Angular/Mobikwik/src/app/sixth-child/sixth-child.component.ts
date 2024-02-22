import { Component,Output,Input,EventEmitter, OnInit } from '@angular/core';

@Component({
  selector: 'app-sixth-child',
  templateUrl: './sixth-child.component.html',
  styleUrls: ['./sixth-child.component.css']
})
export class SixthChildComponent implements OnInit {
@Output() Sample=new EventEmitter<string>();
@Output() Sample1=new EventEmitter<string>();
@Output()showimage1=new EventEmitter<boolean>();
@Output() showimage2=new EventEmitter<boolean>();
@Input() sixthChild:string='';
constructor(){

}
public receiveDataToParent():void{
  this.Sample.emit('TypeScript is a statically typed language that is a superset of JavaScript.');
}
public receiveDataToParent1():void{
  this.Sample1.emit('TypeScript can write JavaScript XML (JSX), although it isn’t included by default.');
}
ngOnInit(): void {
  
}
public showData1():void{
  this.showimage1.emit(true);
}
public showData2():void{
  this.showimage2.emit(true);
}



}
