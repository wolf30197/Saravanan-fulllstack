import { Component, Input, Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-viewcontent',
  templateUrl: './viewcontent.component.html',
  styleUrls: ['./viewcontent.component.css']
})
export class ViewcontentComponent {

   public popup:boolean=false;
  public newMeetingdata=[
    {
      image:"./../../../assets/images/user_edu.svg",
      linktext:'Get a link you can share',
      meettext:'Click New meeting to get a link you can send to people you want to meet with'
    },
    {
      image:"./../../../assets/images/user_edu_safety_light.svg",
      linktext:'plan ahead',
      meettext:'Click New meeting to schedule meetings in Google calendar and send invites to participants'
    },
    {
      image: "./../../../assets/images/user_edu_scheduling.svg",
      linktext:'Your meeting is safe',
      meettext:'No one can join a meeting unless invited or admitted by the host'
    }
  ];


  public itemsPerPage = 1;
  public currentPage = 0;
   public pages:any;
  public getPaginatedData(): any[] {

    const startIndex = this.currentPage * this.itemsPerPage;
    return this.newMeetingdata.slice(startIndex, startIndex + this.itemsPerPage);
    
  }

  public previousPage(): void {
    if (this.currentPage > 0) {
      this.currentPage--;
    }
  }

  public nextPage(): void {
    const maxPage = Math.ceil(this.newMeetingdata.length / this.itemsPerPage) - 1;
    if (this.currentPage < maxPage) {
      this.currentPage++;
    }
  }
  
  public popupDisplay(){
    this.popup=true;
  }

  
  
}


































