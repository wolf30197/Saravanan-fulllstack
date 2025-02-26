import { Component,OnInit } from '@angular/core';
import { FormBuilder,Validators,FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { CanrouteService } from 'src/app/service/canroute.service';
import{HttpClient}from '@angular/common/http';
@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.css']
})
export class EmployeeDetailsComponent {
  public employeeForm!: FormGroup;
  public hidepage:boolean=false;
constructor(private fb: FormBuilder,public router:CanrouteService,public routing:Router){

}
 
  ngOnInit(): void {
    this.employeeForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName:['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      selectDepartment:['',Validators.required],
      mobileNumber: ['', Validators.required],
      gender:['',Validators.required],
      address: ['', Validators.required],
      location:['',Validators.required],
      selectCountry:['',Validators.required],
      dob:['',Validators.required],
      employeeid:['',Validators.required],
      status:['',Validators.required],
        degree: ['', Validators.required],
        chooseFile:['',Validators.required]
      
    });
     //let storageData=localStorage.getItem('employeeData');
     //if(storageData){
     // this.employeeFormDetails= JSON.parse(storageData);
     }
  

  onSubmit() {
    const employeeData=this.employeeForm.value;
    //this.employeeFormDetails.push(employeeData);
    //console.log(this.employeeFormDetails);
    this.router.getEmployeeFormData.push(employeeData);
     //localStorage.setItem('employeeData',JSON.stringify(this.employeeFormDetails));
      this.routing.navigate(['employee-report']);
      this.router.canRoute=true;
  
   
     
  }


}
