import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  public postPersonData=[
    {
      image:"../../../assets/images/Mushfiq1.jpg",
      name:'Mushfic',
      location:'Kozhikode',
      moreoption:"../../../assets/images/moreicon.png" ,
      post:"../../../assets/images/Mushfiq1.jpg"
  },
  {
    image:"../../../assets/images/Ajith.jpg",
    name:'AjithKumar',
    location:'Mysore',
    moreoption:"../../../assets/images/moreicon.png"
    ,
    post:"../../../assets/images/Ajith.jpg"
},
{
  image:"../../../assets/images/Nandha.jpg",
  name:'NandhaKumar',
  location:'Trichy',
  moreoption:"../../../assets/images/moreicon.png"
  ,
  post:"../../../assets/images/Nandha.jpg"
},
{
  image:"../../../assets/images/sreelakshmi.enc",
  name:'Sreelakshmi',
  location:'Trivandrum',
  moreoption:"../../../assets/images/moreicon.png"
  ,
  post:"../../../assets/images/sreelakshmi.enc"
},
{
  image:"../../../assets/images/Sruthi.jpg",
  name:'Sruthi',
  location:'Malappuram',
  moreoption:"../../../assets/images/moreicon.png"
  ,
  post:"../../../assets/images/Sruthi.jpg"
},
{
  image:"../../../assets/images/vivek.jpg",
  name:'Vivek',
  location:'Vellore',
  moreoption:"../../../assets/images/moreicon.png"
  ,
  post:"../../../assets/images/vivek.jpg"
},
{
  image: "../../../assets/images/yethul.jpg",
  name:'Yethul Sidharth',
  location:'Kannur',
  moreoption:"../../../assets/images/moreicon.png"
  ,
  post:"../../../assets/images/yethul.jpg"
},
{
  image:"../../../assets/images/faizal.jpg",
  name:'Faizal',
  location:'Thrissur',
  moreoption:"../../../assets/images/moreicon.png"
  ,
  post:"../../../assets/images/faizal.jpg"
},
]
}