import { Component,OnInit, Output,EventEmitter} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
   
  title = 'checkBoxExercise';
  public popup:boolean=false;
  public popupMessage:boolean=false;
  public result : string='';
  public checkboxResult:string='';
  onCheckboxesChanged(selectedCheckboxes: string) {
    // this.selectedCheckboxes = selectedCheckboxes;
     console.log(selectedCheckboxes)
      this.result = selectedCheckboxes
  }
  checkboxValueChanged(selectedChexboxes:string){
     console.log(selectedChexboxes);
     this.checkboxResult=selectedChexboxes;
  }
   public static selectedCheckboxes: string; 
   public static selectedChexboxesValue:string;
 public todo = ['sandy','capgemini','coimbatore'];
 public done = ['Santhosh','Rathinam'];
  public temp=[];

 
  // if (this.todo.length === 0) {
  //   this.popup=true;
  // }
  //  else {
  //   for (let i=0;i<this.todo.length;i++) {
  //     this.done.push(this.todo[i]);  
  //   }
  // }
  public transfertodoData() {
    if (this.todo.length === 0) {
      this.popup=true;
   }else{
    this.done.push(this.result);
    var index = this.todo.indexOf(this.result);
  if (index > -1) {
     this.todo.splice(index, 1);
   }
   }
          
        
         
        }





        public transferdoneData() {
          if(this.done.length===0){
            this.popupMessage=true;
          }else{
            this.todo.push(this.checkboxResult);
          var index = this.done.indexOf(this.checkboxResult);
        if (index >-1) {
           this.done.splice(index, 1);
        }

          }
          
         }
        



      }
        // this.todo = []; 

//         var myArray = ['sandy', 'capgemini', 'coimbatore'];
// var valuesToRemove = ['capgemini', 'coimbatore'];

// valuesToRemove.forEach(function(this.result) {
//   var index = this.todo.indexOf(this.result);
//   if (index > -1) {
//     myArray.splice(index, 1);
//   }
// });

// console.log(myArray);

       

 


  
  




 


