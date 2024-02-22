import { Component,Output,EventEmitter } from '@angular/core';
import Students from './students';
import { StudentService } from './service/student.service';
import { Router } from '@angular/router';
import { Student } from 'src/Interface/student';
import studentData from './students';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'SampleExercise';
  public students=studentData;
  constructor(private studentService:StudentService,private router:Router){
    
  }

  public design(index:number):any{
    if(index%2==0){
        return true;
    }
    return false;
  }
  public get(index:number):any{
    if(index%2==1){
      return true;
    }
  }
  
 public viewStudentData(data:Student):void{
   this.studentService.selectedStudent = data;
   this.router.navigate(['/student']);
 }
 

}
