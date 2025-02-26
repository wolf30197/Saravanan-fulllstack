import { Component,OnInit,AfterViewInit } from '@angular/core';
import { FormGroup,FormBuilder,FormControl,Validators, MinLengthValidator } from '@angular/forms';
import { Router } from '@angular/router';
import { CanrouteService } from 'src/app/service/canroute.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  

  constructor(private formBuilder: FormBuilder,public router:Router,public authenticate:CanrouteService) { }
   public loginForm!: FormGroup;
   public hidebutton:boolean=false;
   public hidelogin:boolean=true;
   public userloginCredential:any;
  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      userId: ['', Validators.required],
      password: ['',Validators.required]
    });
    this.authenticate.canRoute=true;
  }

  ngAfterviewInit():void{
    this.authenticate.canRoute=false;
    this.authenticate.canRoute=this.hidelogin;
  }

  onSubmit() {
    if (this.loginForm.valid) {
      this.userloginCredential= this.loginForm.value;
      console.log(this.userloginCredential);
      this.authenticate.loginUserData=this.userloginCredential;
       //const password = console.log(this.loginForm.value.password);
      this.router.navigate(['adminpanel']);
      this.hidelogin=false;
      this.authenticate.canRoute=true;
    } else {
    }
  }
}
