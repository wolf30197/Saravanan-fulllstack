import { Component, Output,EventEmitter, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-first-child',
  templateUrl: './first-child.component.html',
  styleUrls: ['./first-child.component.css']
})
export class FirstChildComponent implements OnInit {
@Output() getData= new EventEmitter<string>();
@Output() getData1=new EventEmitter<string>();
@Input() firstChild:string='';
constructor(){

}
public sendDataToParent():void{
  this.getData.emit('A component Data send');
}
public sendDataToParent1():void{
  this.getData1.emit('A component Data received');
}
ngOnInit(): void {
  
}
}
