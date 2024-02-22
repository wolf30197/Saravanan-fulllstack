import { Component,Input,Output,EventEmitter, OnInit } from '@angular/core';

@Component({
  selector: 'app-checkbox-one',
  templateUrl: './checkbox-one.component.html',
  styleUrls: ['./checkbox-one.component.css']
})
export class CheckboxOneComponent implements OnInit{
 @Input() todoList?:string [];
 @Input() popupDisplay?:boolean;
 @Output() checkboxesChanged = new EventEmitter<string>();


 constructor(){
 }

 ngOnInit(): void {
   console.log(this.todoList);
 }
 checkboxChanged(item: any) {
 this.checkboxesChanged.emit(item);

}
}
