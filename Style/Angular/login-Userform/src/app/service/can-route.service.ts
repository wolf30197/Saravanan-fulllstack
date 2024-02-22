import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CanRouteService {

  constructor() { }
  public canRoute:boolean=false;
}
