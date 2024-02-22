import { Component,Input,Output,EventEmitter, OnInit } from '@angular/core';

@Component({
  selector: 'app-checkbox-two',
  templateUrl: './checkbox-two.component.html',
  styleUrls: ['./checkbox-two.component.css']
})
export class CheckboxTwoComponent  {
  @Input() doneList?:string [];
  @Input() popupDisplay?:boolean;
  @Output() checkboxesValueChanged = new EventEmitter<string>();

  ngOnInit(): void {
    console.log(this.doneList);
  }
 
  checkboxValueChanged(item: any) {
    this.checkboxesValueChanged.emit(item);
   
   }
}
