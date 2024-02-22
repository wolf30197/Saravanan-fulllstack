import { Component, Input, OnInit, } from '@angular/core';
import { DependencyService } from 'src/services/dependency.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'codicature';
   public data:string='';
   public show:boolean=true;
   constructor(private demo:DependencyService){
       this.myFunc();
   }
  public receiveData(event:string){
    this.data=event;
  }
  
  public receivedData(event:string){
    this.data=event;
  }
  public named='Akash';

  public getData(event:boolean){
    this.show=event;
  }
  public myFunc(){
    this.demo.dependencyMethod();
  }
  public studentData:string[]=['Akash','Manoj','Pradeep','Santhosh','Mouli','Arun'];
  public Data:any[]=[
    {
     name:'Akash',
     clg:'Rathinam',
     place:'dharmapuri',
     degree:'B.Tech IT'

  },
  {
    name:'Santhosh',
    clg:'Rathinam',
    place:'dharmapuri',
    degree:'B.Tech IT'

 },
 {
  name:'Arun',
  clg:'Rathinam',
  place:'dharmapuri',
  degree:'B.Tech IT'

},
{
  name:'Ajithkumar',
  clg:'Rathinam',
  place:'dharmapuri',
  degree:'B.Tech IT'

}
]
}
