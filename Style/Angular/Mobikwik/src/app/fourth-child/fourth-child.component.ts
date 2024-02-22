import { Component,Output,Input,EventEmitter, OnInit } from '@angular/core';

@Component({
  selector: 'app-fourth-child',
  templateUrl: './fourth-child.component.html',
  styleUrls: ['./fourth-child.component.css']
})
export class FourthChildComponent implements OnInit {
@Output()Data=new EventEmitter<string>();
@Output()Data1=new EventEmitter<string>();
@Input() fourthChild:string='';
constructor(){

}
public receiveDataToParent():void{
  this.Data.emit('Angular is a Google-developed and maintained web framework.');
}
public receiveDataToParent1():void{
  this.Data1.emit('React, a JavaScript library used by Facebook was open-sourced in 2013.');
}
ngOnInit(): void {
  
}
}
