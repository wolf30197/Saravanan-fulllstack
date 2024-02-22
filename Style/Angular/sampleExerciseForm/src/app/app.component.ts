import { Component } from '@angular/core';
import student from './student';
import { DialogueService } from './service/dialogue.service';
import { StudentData } from './interface/student-data';
import { Router } from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  {
  public studentsInformation=student;
  constructor(public dialogueService:DialogueService,public route:Router){

  }
  title = 'sampleExerciseForm';

   editItem(datas:StudentData):any{
    this.dialogueService.studentDetails=datas;
    this.route.navigate(['/dialogue']);
    console.log(datas);
   }

}
