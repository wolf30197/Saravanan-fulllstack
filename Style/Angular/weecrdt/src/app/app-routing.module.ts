import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreditScoreComponent } from './components/credit-score/credit-score.component';
import { AppComponent } from './app.component';
import { LoansComponent } from './components/loans/loans.component';
const routes: Routes = [
  {path:'',redirectTo:'/app-root',pathMatch:'full'},
  {path:'Home',component:AppComponent},
  {path:'credit',component:CreditScoreComponent},
  {path:'loans',component:LoansComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
