import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { LoansComponent } from './loans/loans.component';
import { CardsComponent } from './cards/cards.component';
import { ContactUsComponent } from './contact-us/contact-us.component';

const routes: Routes = [
  {path:'',redirectTo:'/app-root ',pathMatch:'full'},
  { path:'app-root',component:AppComponent },
  {path:'about-us',component:AboutUsComponent},
  {path:'loans',component:LoansComponent},
  {path:'cards',component:CardsComponent},
  {path:'contact-us',component:ContactUsComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
