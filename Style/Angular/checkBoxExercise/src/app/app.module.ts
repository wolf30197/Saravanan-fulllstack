import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CheckboxOneComponent } from './components/checkbox-one/checkbox-one.component';
import { CheckboxTwoComponent } from './components/checkbox-two/checkbox-two.component';

@NgModule({
  declarations: [
    AppComponent,
    CheckboxOneComponent,
    CheckboxTwoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
