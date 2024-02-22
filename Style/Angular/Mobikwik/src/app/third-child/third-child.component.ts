import { Component ,Output,EventEmitter,Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-third-child',
  templateUrl: './third-child.component.html',
  styleUrls: ['./third-child.component.css']
})
export class ThirdChildComponent implements OnInit{
@Output() getDataValue=new EventEmitter<string>();
@Output() getDataValue1=new EventEmitter<string>();
@Input() thirdChild:string="";
constructor(){

}
public sendDataToParent():void{
  this.getDataValue.emit('C component Data send');
}
public sendDataToParent1():void{
 this.getDataValue1.emit('C component Data received');
}
ngOnInit(): void {
  
}
}
