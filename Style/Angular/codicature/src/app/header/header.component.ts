import { Component,Output,EventEmitter,Input, OnInit, OnChanges, SimpleChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy,} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnChanges,OnInit,DoCheck,AfterContentInit,AfterContentChecked,AfterViewInit,AfterViewChecked,OnDestroy {
 @Output()outputData=new EventEmitter<string>();
 
 @Output() showData=new EventEmitter<boolean>();
 
 public sendDataToParent():void{
  
  this.outputData.emit('Transfer Data');
 }
 public sendData():void{
  this.showData.emit(false);
 }
 public ngOnChanges(changes: SimpleChanges): void {
   console.log('Onchanges',changes);
 }
 public ngOnInit(): void {
  console.log('OnInit');
}
public ngDoCheck(): void {
  console.log('DoCheck');
}
 public ngAfterContentInit(): void {
  console.log('AfterContentInit');
}

 public ngAfterContentChecked(): void {
  console.log('AfterContentChecked');
}
 public ngAfterViewInit(): void {
  console.log('AfterViewInit');
}

 public ngAfterViewChecked(): void {
  console.log('AfterViewChecked');
}
 public ngOnDestroy(): void {
  console.log('OnDestroy');
}

public name='Akash';
public College='Sns college';
}

