import { Component, OnInit } from '@angular/core';
import { FormsModule,FormControl,FormGroup,Validators } from '@angular/forms';
@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.css']
})
export class FormsComponent  {
  public userForm=new FormGroup({
    firstName: new FormControl('',[Validators.required]),
    lastName:new FormControl('',[Validators.required]),
    email:new FormControl('',[Validators.required]),
    number:new FormControl('',[Validators.required,Validators.minLength(10)]),
    college:new FormControl('',[Validators.required]),
    Qualification:new FormControl('',[Validators.required]),
    streetName:new FormControl('',[Validators.required]),
    village:new FormControl('',[Validators.required]),
    panchayat:new FormControl('',[Validators.required]),
    district:new FormControl('',[Validators.required]),
    pincode:new FormControl('',[Validators.required]),
    state:new FormControl('',[Validators.required]),
  });
  //ngOnInit(): void {
  //  this.userForm.valueChanges.subscribe(data=>console.log(data));
  //}
  submit(){
    console.log(this.userForm.valid);
    //this.userForm.setValue({
    //  firstName: 'saravanan',
      //lastName:'selvan',
     // email:'saravananbtechit11@gmail.com',
      //number:"8754890183",
    //})
    setTimeout(()=>{
      this.userForm.patchValue({firstName:'santhosh'})
    },10000)
    console.log(this.userForm.value);

  }

}
