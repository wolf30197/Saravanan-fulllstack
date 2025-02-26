import { Component ,OnInit,Input} from '@angular/core';
import { FormBuilder,Validators,FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { CanrouteService } from 'src/app/service/canroute.service';
@Component({
  selector: 'app-editemployee-details',
  templateUrl: './editemployee-details.component.html',
  styleUrls: ['./editemployee-details.component.css']
})
export class EditemployeeDetailsComponent {
  constructor(private fb: FormBuilder,public router:CanrouteService,public routing:Router){

  }
  public employee!:FormGroup;
  public editableData:any=[];
  ngOnInit(): void {
    this.editableData=this.router.editEmployeeData;
    this.employee = this.fb.group({
      fName: ['', Validators.required],
      lName:['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      Department:['',Validators.required],
      mobile: ['', Validators.required],
      gender:['',Validators.required],
      address: ['', Validators.required],
      location:['',Validators.required],
      selectCountry:['',Validators.required],
      dob:['',Validators.required],
      employeeid:['',Validators.required],
      nationality:['',Validators.required],
      education: this.fb.group({
        degree: ['', Validators.required],
        institution: ['', Validators.required],
        place:['',Validators.required],
        graduationYear: ['', Validators.required],
        grade:['',Validators.required],
        secondaryNumber:['',Validators.required]
      })
    });
console.log(this.editableData);
      
    //console.log(this.editableData);
     //let storageData=localStorage.getItem('employeeData');
     //if(storageData){
     // this.employeeFormDetails= JSON.parse(storageData);
     }
     onSubmit(){
      this.router.canRoute=true;
      this.routing.navigate(['employee-report']);

     }
  
}
