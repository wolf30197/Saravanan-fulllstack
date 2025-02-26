import { Component ,OnInit} from '@angular/core';
import { CanrouteService } from 'src/app/service/canroute.service';
import { FormBuilder,Validators,FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-assigntask',
  templateUrl: './assigntask.component.html',
  styleUrls: ['./assigntask.component.css']
})
export class AssigntaskComponent {
  
  public taskAssignForm!: FormGroup;
 
constructor(private fb: FormBuilder,private taskService:CanrouteService,public routing:Router){

}
ngOnInit(): void {
  this.taskAssignForm= this.fb.group({
    taskName: ['', Validators.required],
    //teams:['',Validators.required],
    taskDescription:['', Validators.required],
    priority: ['', [Validators.required]],
    taskstartDate:['',Validators.required],
    taskstartTime: ['', Validators.required],
    taskendDate:['',Validators.required],
    taskendTime: ['', Validators.required],
    status:['',Validators.required]
    })
   //let storageData=localStorage.getItem('employeeData');
   //if(storageData){
   // this.employeeFormDetails= JSON.parse(storageData);
   }
   onSubmit() {
    const employeeassigntaskData=this.taskAssignForm.value;
    //this.employeeFormDetails.push(employeeData);
    //console.log(this.employeeFormDetails);
    this.taskService.getAssignTaskDetail.push(employeeassigntaskData);
     //localStorage.setItem('employeeData',JSON.stringify(this.employeeFormDetails));
      this.routing.navigate(['employee-report']);
      this.taskService.canRoute=true;
  
      console.log(employeeassigntaskData);
     
  }



  }
