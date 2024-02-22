import { Component ,OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { CanRouteService } from 'src/app/service/can-route.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
constructor( private router:Router,public route:CanRouteService){

}
  signupUsers:any[]=[];
  signupObj:any={
    userName:'',
    email:'',
    password:''
  }

  public hideContent:boolean=true;
ngOnInit():void{
const localData=localStorage.getItem('signUpUsers');
if(localData !=null){
this.signupUsers=JSON.parse(localData);
}
}
onSignUp(){
  if (this.signupObj.userName && this.signupObj.email && this.signupObj.password) {
    // If all fields are filled, save to signupUsers and localStorage
    this.signupUsers.push(this.signupObj);
    localStorage.setItem('signUpUsers', JSON.stringify(this.signupUsers));
    
    // Navigate to another page
    this.router.navigate(['/my-login']);
     this.route.canRoute=true;
  this.signupObj={
    userName:'',
    email:'',
    password:''
    
  }
  this.hideContent=false;
}
else{
  alert('fields are empty');
}
 
}
}
