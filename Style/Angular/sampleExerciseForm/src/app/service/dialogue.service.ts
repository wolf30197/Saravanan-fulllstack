import { Injectable,OnInit } from '@angular/core';
import { StudentData } from '../interface/student-data';
@Injectable({
  providedIn: 'root'
})
export class DialogueService implements OnInit{

  constructor() { }
  public studentDetails?:StudentData;
ngOnInit(): void {
  console.log( this.studentDetails);
}
setSelectedValue(value: any) {
  this.studentDetails = value;
}

getSelectedValue() {
  return this.studentDetails;
}

}
