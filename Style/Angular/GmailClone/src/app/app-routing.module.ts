import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MailmessageComponent } from './Components/mailmessage/mailmessage.component';
import { MessageboxComponent } from './Components/messagebox/messagebox.component';

const routes: Routes = [
  {path:'app-component',redirectTo:'/app-root',pathMatch:'full'},
  {path:'messagebox',component:MessageboxComponent},
  {path:'mailmessage',component:MailmessageComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
