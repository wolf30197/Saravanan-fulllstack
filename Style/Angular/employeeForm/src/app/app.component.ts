import { Component, OnInit } from '@angular/core';
import { FormControl,FormGroup,Validators } from '@angular/forms';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit  {
  title = 'employeeForm';
  public userForm=new FormGroup({
    firstName:new FormControl(''),
    lastName:new FormControl(''),
    company:new FormControl(''),
    position:new FormControl(''),
    experience:new FormControl(''),
    workLocation:new FormControl(''),
    address:new FormControl(''),
  })
submit():void {
  console.log(this.userForm.value);
  
}
ngOnInit(): void {
  this.userForm.valueChanges.subscribe(data=>{
    console.log(data);
  })

  }
    
}

