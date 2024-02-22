import { Component, Output ,EventEmitter, OnInit,Input} from '@angular/core';

@Component({
  selector: 'app-second-child',
  templateUrl: './second-child.component.html',
  styleUrls: ['./second-child.component.css']
})
export class SecondChildComponent implements OnInit {
   @Output() getValue=new EventEmitter<string>();
   @Output() getValue1=new EventEmitter<string>();
   @Input() secondChild:string='';
   constructor(){

   }
   public sendDataToParent():void{
    this.getValue.emit('B component Data send');
   }
   public sendDataToParent1():void{
      this.getValue1.emit('B component Data received');
   }
   ngOnInit(): void {
      
   }
}
