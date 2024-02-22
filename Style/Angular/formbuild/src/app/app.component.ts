import { HttpClient } from '@angular/common/http';
import { AfterContentChecked, AfterViewChecked, AfterViewInit, Component,OnInit, ViewChild } from '@angular/core';
import { FormsModule,FormBuilder,FormGroup,Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { ViewComponent } from './view/view.component';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit,AfterViewInit,AfterViewChecked{
  title = 'formbuild';
  @ViewChild(ViewComponent) view!: ViewComponent;
 
  public data!:string;

  constructor(private http:HttpClient){

  }
  // public showData:string='';
  public displayData:any;
  public date=new Date();
  // public  userForm=this.formbuilder.group({
  //   firstName:['',Validators.required],
  //   lastName:['',Validators.required],
  //   college:this.formbuilder.group({
  //     name:[''],
  //     qualification:[''],
  //     degree:[''],
  //   })
  // })

 // ngOnInit(): void {
  //  this.userForm.valueChanges.subscribe(data=>console.log(data)); 
  //}
  // submit() {
  //   console.log(this.userForm.valid);
  //     }
  //     setData(){
  //       this.userForm.setValue({
  //         firstName: 'Saravanan',
  //         lastName: 'Selvan',
  //         college: {
  //           name: 'Manoj',
  //           qualification:'B.Tech information Technology',
  //           degree:'B.Tech'
  //     }
  //   })
  // }
  // submitForm(){
  //   this.submit();
  //   this.setData();
  // }
  // public studentForm=this.formbuilder.group({
  //   name:['',Validators.required],
  //   department:['',Validators.required],
  //   collegeName:['',Validators.required]
  // })
  // getData():void{
  // //console.log(this.studentForm.value)
  // console.log(this.studentForm.valid);
  
  // }
 
  ngOnInit():void{
    //this.studentForm.valueChanges.subscribe(data=>console.log(data));
this.http.get("https://jsonplaceholder.typicode.com/posts").subscribe(data=>{
  console.log(data);
  this.displayData=data;
})
  }
  ngAfterViewInit(): void {
    this.view.printName();
    //this.view.name='Akash';
  }
   ngAfterViewChecked(): void {
     this.view.name='Akash';
   }
}