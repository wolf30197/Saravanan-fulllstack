import { Component,OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CanRouteService } from 'src/app/service/can-route.service';


@Component({
  selector: 'app-userform',
  templateUrl: './userform.component.html',
  styleUrls: ['./userform.component.css']
})
export class UserformComponent {
 public  myForm!: FormGroup;
 public hideForm:boolean=true;

  constructor(private formBuilder: FormBuilder,public dataservice:CanRouteService)  { 

  }
  public name:string='Name';
  ngOnInit(): void {
    this.myForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      city:['',Validators.required],
      state:['',Validators.required],
      company:['',Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
    this.dataservice.getData().subscribe(data=>this.name=data);
  }

  onSubmit() {
    if (this.myForm.valid) {
      console.log(this.myForm.value);
       this.hideForm=false;
    }
  }
}
