import { Component,Output,Input,EventEmitter, OnInit } from '@angular/core';

@Component({
  selector: 'app-fifth-child',
  templateUrl: './fifth-child.component.html',
  styleUrls: ['./fifth-child.component.css']
})
export class FifthChildComponent implements OnInit{
@Output() Value=new EventEmitter<string>();
@Output() Value1=new EventEmitter<string>();

@Input() fifthChild:string='';
constructor(){

}
public receiveDataToParent():void{
  this.Value.emit('Built-in support for AJAX, HTTP, and Observables are just a few of Angulars highlights.');
}
public receiveDataToParent1():void{
  this.Value1.emit('React’s key features include the ability to use third-party libraries.');
}
ngOnInit(): void {
  
}
}
