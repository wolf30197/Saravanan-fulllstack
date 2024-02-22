import { getLocaleDayNames } from '@angular/common';
import { Component ,OnInit} from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { CanRouteService } from 'src/app/service/can-route.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
constructor(private router: Router,public route:CanRouteService){

}

  signupUsers:any[]=[];
  signupObj:any={
    userName:'',
    email:'',
    password:''
  }
loginObj:any={
  userName:'',
  password:''
}
public hideContent:boolean=true;
ngOnInit():void{
const localData=localStorage.getItem('signUpUsers');
if(localData !=null){
this.signupUsers=JSON.parse(localData);
}
}
onLogin(){
  if (this.loginObj.userName && this.loginObj.password){
  const isUserExist=this.signupUsers.find(m=>m.email==this.loginObj.email && m.password==this.loginObj.password);
  if(isUserExist !=undefined){
    alert('user login successfully');
  }
  else{
    this.router.navigate(['/my-form']);
    this.hideContent=false;
    this.route.canRoute=true;
  }
}
else{
  alert('Please fill in both username and password fields');
}
}
}

