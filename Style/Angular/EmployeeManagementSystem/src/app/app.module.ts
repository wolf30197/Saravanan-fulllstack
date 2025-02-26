import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { AdminComponent } from './components/admin/admin.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EmployeeDetailsComponent } from './components/employee-details/employee-details.component';
import { EmployeelistComponent } from './components/employee-report/employee-list.component';
import { HttpClientModule } from '@angular/common/http';
import { Chart } from 'chart.js';
import { EditemployeeDetailsComponent } from './components/editemployee-details/editemployee-details.component';
import { AssigntaskComponent } from './components/assigntask/assigntask.component';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    AdminComponent,
    EmployeeDetailsComponent,
    EmployeelistComponent,
    EditemployeeDetailsComponent,
    AssigntaskComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
