import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CanRouteService {

  constructor() { }
  public canRoute:boolean=false;

  public dataSubject=new Subject<string>();
  public setData(value:string):void{
    this.dataSubject.next(value);
  }
  public getData():Observable<string>{
    return this.dataSubject.asObservable();
  }
}
