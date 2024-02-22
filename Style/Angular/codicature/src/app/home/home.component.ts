import { Component,Input,  Output,EventEmitter, OnInit } from '@angular/core';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{
  @Output() outputValue=new EventEmitter<string>();
  @Input() receiveHeader:string='';
  constructor(){

  }
  public sendDataToParent(){
    this.outputValue.emit('Test the transfer data');
  }
   ngOnInit(): void {
  
}
}
