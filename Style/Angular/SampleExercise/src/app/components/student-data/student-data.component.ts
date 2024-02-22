import { Component,OnInit } from '@angular/core';
import { Student } from 'src/Interface/student';
import { StudentService } from 'src/app/service/student.service';
import Students from 'src/app/students';
@Component({
  selector: 'app-student-data',
  templateUrl: './student-data.component.html',
  styleUrls: ['./student-data.component.css']
})
export class StudentDataComponent implements OnInit{
  public data:Student;
  constructor(private detailService:StudentService){
  }
    ngOnInit(): void {
      this.data=this.detailService.selectedStudent;
    }
   
}
