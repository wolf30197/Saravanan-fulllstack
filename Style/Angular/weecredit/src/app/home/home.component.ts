import { Component,EventEmitter,Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  @ Input() inputValue: string ='';
 constructor(){

 }
    ngOnInit(): void{
   console.log(this.inputValue);
 }
 
}
