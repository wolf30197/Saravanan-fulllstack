import { Component } from '@angular/core';
import { startWith } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Mobikwik';
  public data:string='';
  public data1:string='';
  public data2:string='';
  public get:string='';
  public get1:string='';
  public get2:string='';
  public show:boolean=false;
  public show1:boolean=false;
  
  public receiveFirstChild(event:string){
    this.data=event;
  }
  public receiveSecondChild(event:string){
    this.data1=event;
  }
  public receiveThirdChild(event:string){
   this.data2=event;
  }
  
  public getChildOne(event:string){
    this.get=event;
  }
  public getChildTwo(event:string){
    this.get1=event;
  }
  public getChildThree(event:string){
    this.get2=event;
  }
  public getImage(event:boolean){
    this.show=event;
    
  }
  public getImage1(event:boolean){
    this.show1=event;
  }
  public getStudentData:any[]=[{
    Name:'Akash',
    Clg:'Rathinam Technical Campus',
    degree:'B.Tech IT',
    place:'Dharmapuri',
    work:'Aezion',
    gender:'male'
  },
  {
    Name:'AjithKumar',
    Clg:'Rathinam Technical Campus',
    degree:'B.Tech IT',
    place:'Ooty',
    work:'Avasoft',
    gender:'male'
  },
  {
    Name:'Sreelakshmi',
    Clg:'Rathinam Technical Campus',
    degree:'B.Tech IT',
    place:'Kannur',
    work:'UST Global campus',
    gender:'female'
  },
  {
    Name:'Mouli',
    Clg:'Rathinam Technical Campus',
    degree:'B.Tech IT',
    place:'Coimbatore',
    work:'Capgemini',
    gender:'male'
  },
  {
    Name:'Shankar',
    Clg:'Rathinam Technical Campus',
    degree:'B.Tech IT',
    place:'Coimbatore',
    work:'Infosys',
    gender:'male'
  },
  {
    Name:'Mani',
    Clg:'Rathinam Technical Campus',
    degree:'B.Tech IT',
    place:'Ooty',
    work:'Zoho',
    gender:'male'
  },
  {
    Name:'Vishnu',
    Clg:'Rathinam Technical Campus',
    degree:'B.Tech IT',
    place:'Coimbatore',
    work:'TCS',
    gender:'male'
  },
  {
    Name:'Sruthi',
    Clg:'Rathinam Technical Campus',
    degree:'B.Tech IT',
    place:'Kozhikode',
    work:'Qualitest',
    gender:'female'
  },
]
 
public even(index:number):any{
  if(index%2==1){
    return true;
  }
  return false;
}

public getData:any[]=[
  {
  Name:'Santhosh',
  Department:"Information Technology",
  Place:'Kochi',
  Work:'Digiora Technologies',
  Degree:'B.Tech',
  Age:23,
  Hometown:'Coimbatore'
},
{
  Name:'SriMadhumitha',
  Department:"Information Technology",
  Place:'Coimbatore',
  Work:'Tart Labs',
  Degree:'B.Tech',
  Age:23,
  Hometown:'Dindigul'
},
{
  Name:'Arun',
  Department:"Information Technology",
  Place:'Chennai',
  Work:'Capgemini',
  Degree:'B.Tech',
  Age:23,
  Hometown:'Ooty'
},
{
  Name:'Mushfic',
  Department:"Computer Science",
  Place:'Bangalore',
  Work:'Google',
  Degree:'B.Tech',
  Age:23,
  Hometown:'Kozhikode'
},
{
  Name:'Ashley Philip',
  Department:"Information Technology",
  Place:'Kochi',
  Work:'Thinkpalm Technologies',
  Degree:'B.Tech',
  Age:23,
  Hometown:'Kochi'
},
{
  Name:'Pradeep',
  Department:"Computer Science",
  Place:'Coimbatore',
  Work:'Rently',
  Degree:'B.Tech',
  Age:23,
  Hometown:'Bangalore'
},
{
  Name:'Manoj',
  Department:"Computer Science",
  Place:'Kochi',
  Work:'Claysys Technologies',
  Degree:'B.E',
  Age:23,
  Hometown:'Ooty'
},
{
  Name:'Aishwarya',
  Department:"Information Technology",
  Place:'Coimbatore',
  Work:'Tart Labs',
  Degree:'B.Tech',
  Age:23,
  Hometown:'Coimbatore'
},
{
  Name:'Amith',
  Department:"Information Technology",
  Place:'Trivandrum',
  Work:'Allianz Technologies',
  Degree:'B.Tech',
  Age:23,
  Hometown:'Kannur'
},
{
  Name:'Alosius Joy',
  Department:"Information Technology",
  Place:'Trivandrum',
  Work:'Zewia software solutions',
  Degree:'B.Tech',
  Age:23,
  Hometown:'Vadakara'
},
{
  Name:'Akash',
  Department:"Computer Science",
  Place:'Chennai',
  Work:'Freshworks',
  Degree:'B.E',
  Age:23,
  Hometown:'Tirunelveli'
}
]
 
public odd(getValue:any){
  if(getValue.Department=='Information Technology' &&  getValue.Degree=='B.Tech'){
    return true;
  }
  return false;
}

}

