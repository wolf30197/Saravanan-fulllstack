import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { AppComponent } from './app.component';
import { AdminComponent } from './components/admin/admin.component';
import { EmployeeDetailsComponent } from './components/employee-details/employee-details.component';
import { authGuard } from './guards/auth.guard';

import { EmployeelistComponent } from './components/employee-report/employee-list.component';
import { EditemployeeDetailsComponent } from './components/editemployee-details/editemployee-details.component';
import { AssigntaskComponent } from './components/assigntask/assigntask.component';

const routes: Routes = [
  {path:'login',component:LoginComponent,pathMatch:'full',canActivate:[authGuard]},
  {path:'signup',component:SignupComponent},
  { path: 'adminpanel', component:AdminComponent,canActivate:[authGuard]},
  { path: 'employee-form', component: EmployeeDetailsComponent,canActivate:[authGuard]},
  {path:'employee-report',component:EmployeelistComponent,canActivate:[authGuard]},
  {path:'edit-employee-data',component:EditemployeeDetailsComponent,canActivate:[authGuard]},
  {path:'assigntask',component:AssigntaskComponent,canActivate:[authGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
