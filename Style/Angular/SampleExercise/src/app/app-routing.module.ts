import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import Student from './students';
import { StudentDataComponent } from './components/student-data/student-data.component';
import { AppComponent } from './app.component';
const routes: Routes = [
  {path:'appcomponent',component:AppComponent},
  {path:'student',component:StudentDataComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
