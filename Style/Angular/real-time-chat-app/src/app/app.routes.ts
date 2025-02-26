import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { SignupComponent } from './components/signup/signup.component';

export const routes: Routes = [
  {path: '',redirectTo:'',pathMatch:'full',component:AppComponent,
  children:[{ path: 'signup', component: SignupComponent}]
  }
];
