import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DependencyService {

  constructor() { }

  public dependencyMethod(){
    alert('Services are dependency injection');
  }
}
