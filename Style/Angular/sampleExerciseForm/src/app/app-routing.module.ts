import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DialogueComponent } from './dialogue/dialogue/dialogue.component';
import { AppComponent } from './app.component';

const routes: Routes = [
  {path:'',redirectTo:'app-root',pathMatch:'full'},
  {path:'dialogue',component:DialogueComponent},
  {path:'home',component:AppComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
