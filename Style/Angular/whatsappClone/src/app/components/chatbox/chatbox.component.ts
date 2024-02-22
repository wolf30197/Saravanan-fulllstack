import { Component,Output,EventEmitter,Input } from '@angular/core';


@Component({
  selector: 'app-chatbox',
  templateUrl: './chatbox.component.html',
  styleUrls: ['./chatbox.component.css']
})
export class ChatboxComponent {
  constructor(){
  }
  
  public peopleData = [
    {
      id: 1,
      name: 'Mushfic',
      image:"./../../../assets/images/Mushfiq1.jpg",
      message:'Hi da Mushfic Where are you',
      occupation: 'Software Engineer'
    },
    {
      id: 2,
      name: 'Ajithkumar',
      image:"./../../../assets/images/Ajith.jpg",
      message:'Hi da Ajith Where are you',
      occupation: 'Data Scientist'
    },
    {
      id: 3,
      name: 'Sreelakshmi',
      image:"./../../../assets/images/sreelakshmi.enc",
      message:'Hi sreelakshmi Where are you',
      occupation: 'Software Developer'
    },
    {
      id: 4,
      name: 'Mano Bro',
      image:"./../../../assets/images/manobro.jpg",
      message:'Hi mano bro Where are you',
      occupation: 'Graphic Designer'
    },
    {
      id: 5,
      name: 'Amith',
      image:"./../../../assets/images/Mushfiq.jpg",
      message:'Hi da Amith Where are you',
      occupation: 'Software Engineer'
    },
    {
      id: 6,
      name: 'Sree',
      age: 25,
      image:"./../../../assets/images/Sree.jpg",
      message:'Hi sree where are you',
      occupation: 'Data Scientist'
    },
    {
      id: 7,
      name: 'Sruthi',
      age: 35,
      image:"./../../../assets/images/Sruthi.jpg",
      message:'Hi sruthi where are you',
      occupation: 'Marketing Manager'
    },
    {
      id: 8,
      name: 'Yethul Sidharth',
      age: 28,
      image:"./../../../assets/images/yethul.jpg",
      message:'Hi da yethul Where are you',
      occupation: 'Graphic Designer'
    },
    {
      id: 9,
      name: 'Vijay Bro',
      age: 28,
      image:"./../../../assets/images/Vijay bro.jpg",
      message:'Hi vijay bro Where are you',
      occupation: 'Graphic Designer'
    },
    {
      id: 10,
      name: 'Arun',
      age: 28,
      image:"./../../../assets/images/arun.jpg",
      message:'Hi da arun Where are you',
      occupation: 'Graphic Designer'
    },
    {
      id: 11,
      name: 'NandhaKumar',
      age: 28,
      image:"./../../../assets/images/Nandha.jpg",
      message:'Hi da arun Where are you',
      occupation: 'System Engineer'
    }
  ];

  
  public personDataValue:any;
  public getValue:any;
  sendData(person: any) {
    console.log(person);
    this.personDataValue=person;
  }
  public hideComponent:boolean=false;
  public hideValue:boolean=false;
}
