import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  public imagesAndNames = [
    {
        name: "Mushfic",
        image: "../../../assets/images/Mushfiq1.jpg"
    },
    {
        name: "Ajithkumar",
        image:  "../../../assets/images/Ajith.jpg"
    },
    {
        name: "Nandha",
        image: "../../../assets/images/Nandha.jpg"
    },
    {
        name: "Sreelakshmi",
        image: "../../../assets/images/sreelakshmi.enc"
    },
    {
        name: "Sruthi",
        image: "../../../assets/images/Sruthi.jpg"
    },
    {
        name: "Vivek",
        image: "../../../assets/images/vivek.jpg"
    },
    {
        name: "Yethul",
        image: "../../../assets/images/yethul.jpg"
    },
    {
        name: "Faizal",
        image: "../../../assets/images/faizal.jpg"
    },
    {
        name: "Manoj",
        image: "../../../assets/images/manobro.jpg"
    },
    {
        name: "Sree",
        image: "../../../assets/images/Sree.jpg"
    }
];
public hideButton:boolean=false;
}
