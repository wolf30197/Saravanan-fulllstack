import { Component } from '@angular/core';

import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'weecredit';
  public name='saravanan';
  public value='Akash';
  public getData(){
    alert('event binding');
  }
  public twoWayDB='2Way Data Binding';
  public  img(){
    let image=document.createElement('img');
     image.src="https://media.istockphoto.com/id/1462151129/photo/prevent-global-warming-girl-planting-a-small-tree.webp?b=1&s=170667a&w=0&k=20&c=0a4uYpwm9LNRVsxIVG50_cvBylNbVLKKdDUx7lj6Msw=";
     document.body.append(image);
  }
  public get='Dwell';
  public age='20';
}

