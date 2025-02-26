import { Component,OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { CanrouteService } from 'src/app/service/canroute.service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeelistComponent {
  public employees:any;
  public getEmployeeData:any=[];
constructor(public authenticate:CanrouteService,public routing:Router){


}

public employeeDetails=[
  {
    employeeid:1298,
    firstName:'Akash',
    lastName:'ak',
    gender:'Male',
    email:'akash32@gmail.com',
    mobileNo:9787914238,
    selectDepartment:'Developer',
    location:'Trivandrum'
  },
  {
    employeeid:1297,
    firstName:'Arun',
    lastName:'velumani',
    gender:'Male',
    email:'arun352@gmail.com',
    mobileNo:9787903456,
    selectDepartment:'Fullstack Developer',
    location:'Kochi'
  },
  {
    employeeid:1292,
    firstName:'santhosh',
    lastName:'kumar',
    gender:'Male',
    email:'santhosh11@gmail.com',
    mobileNo:8754920136,
    selectDepartment:'Designer',
    location:'Bangalore'
  },
  {
    employeeid:1295,
    firstName:'ajith',
    lastName:'kumar',
    gender:'Male',
    email:'ajithkumar12@gmail.com',
    mobileNo:6374892134,
    selectDepartment:'Developer',
    location:'Hyderabad'
  },
]
public getEmployee:any=[];
public editEmployeeData:any=[];
public hideComponent=true;
ngOnInit():void{
  this.getEmployee=this.authenticate.getEmployeeFormData;
  //const storedData=localStorage.getItem('employeeData');
  //if(storedData){
   // this.employees=JSON.parse(storedData);
    //console.log(storedData);
  }
  getEmployeeDetails(index: number) {
    const employee = this.employeeDetails[index];
   // console.log(employee);
    this.authenticate.editEmployeeData.push(employee);
  }

  getEmployeeDetail(index:number){
    const employeeData=this.getEmployee[index];
    //console.log(employeeData);
    this.authenticate.editEmployeeData.push(employeeData);
   //this.authenticate.editEmployeeData.splice(index,1);
  }
  getEditEmployeeData():void{
    this.routing.navigate(['edit-employee-data'])
    this.authenticate.canRoute=true;
  }

showEmployeeForm(){
  this.routing.navigate(['employee-form'])
  this.authenticate.canRoute=true;
}


}
