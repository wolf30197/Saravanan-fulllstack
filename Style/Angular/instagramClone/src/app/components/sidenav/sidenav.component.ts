import { Component } from '@angular/core';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent {
  public sidenavData = [
    { 
        name: "Home",
        image: "../../../assets/images/home.png"
    },
    { 
        name: "Search",
        image: "../../../assets/images/search.png"
    },
    { 
        name: "Explore",
        image: "../../../assets/images/explore.png"
    },
    { 
        name: "Reels",
        image: "../../../assets/images/reels.png"
    },
    { 
        name: "Messages",
        image: "../../../assets/images/messages.png"
    },
    { 
        name: "Notifications",
        image: "../../../assets/images/notifications.png"
    },
    { 
        name: "Create",
        image: "michael.jpg"
    },
    { 
        name: "profile",
        image: "../../../assets/images/Nandha.jpg"
    }
];
}
