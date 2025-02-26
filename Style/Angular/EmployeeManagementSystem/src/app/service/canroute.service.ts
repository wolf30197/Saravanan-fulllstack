import { Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CanrouteService {

  constructor() { 
    
  }
  public canRoute:boolean=false;
  public canDeactivate:boolean=false;
  public showadminpanel:boolean=false;

  public hidelogin:boolean=true;
  public getEmployeeFormData:any=[];
  public loginUserData:any;
public editEmployeeData:any=[];
public getAssignTaskDetail:any=[];

}
