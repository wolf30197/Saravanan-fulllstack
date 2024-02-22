import { Component,OnInit } from '@angular/core';
import { StudentData } from 'src/app/interface/student-data';
import { DialogueService } from 'src/app/service/dialogue.service';
import { FormsModule } from '@angular/forms';
import { FormBuilder,FormGroup,Validators } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-dialogue',
  templateUrl: './dialogue.component.html',
  styleUrls: ['./dialogue.component.css']
})
export class DialogueComponent  {
  myForm!: FormGroup;
  selectedValue: any;

  constructor(private dataService:DialogueService, private fb: FormBuilder,private router:Router) {}

  ngOnInit() {
    this.selectedValue = this.dataService.getSelectedValue();

    this.myForm = this.fb.group({
      selectedValue: [this.selectedValue, Validators.required],
    });
    
  }
  closeDialogue(){
 this.router.navigate(['/home']);
  }
}



