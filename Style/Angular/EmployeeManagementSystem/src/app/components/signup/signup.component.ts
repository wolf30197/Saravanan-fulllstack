import { HttpClient } from '@angular/common/http';
import { Component,OnInit } from '@angular/core';
import { FormGroup,FormBuilder, FormControl,Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CanrouteService } from 'src/app/service/canroute.service';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {

  constructor( public formBuilder:FormBuilder,public authenticate:CanrouteService,public route:Router,public http:HttpClient){
    this.httpget();
  }
  public signupForm!:FormGroup;
  public formData:any={};
  public hidesignup:boolean=true;
  public hidelogin:boolean=true;
  ngOnInit():void{
    this.signupForm=this.formBuilder.group({
      username:['',Validators.required],
      password:['',Validators.required]
      
    })
    
    this.authenticate.canRoute=true;
  }
  onSubmit(){
    if(this.signupForm.valid){
      console.log(this.formData);
   this.route.navigate(['login']);
   this.hidesignup=false;
   this.authenticate.canRoute=this.hidelogin;
    }
    else{

    }
  }
  httpget(){
    this.http.get('https://api.publicapis.org/entries').subscribe((data)=>{
    console.log(data);
    })
  }
}