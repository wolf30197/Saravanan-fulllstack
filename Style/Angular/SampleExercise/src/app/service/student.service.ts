import { Injectable, OnInit,} from '@angular/core';
import { Student } from 'src/Interface/student';
import Students from '../students';
import StudentData from '../students';
@Injectable({
  providedIn: 'root'
})
export class StudentService  implements OnInit {
     public selectedStudent: Student;
  constructor() {

   }
     
   ngOnInit(): void {
     
   }
}
