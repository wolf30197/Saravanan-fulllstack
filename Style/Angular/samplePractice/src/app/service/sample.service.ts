import { Injectable, OnInit } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SampleService  {

  constructor() {
   }
  public sampleData!:string;
  public infosysDetail!:string;

}
