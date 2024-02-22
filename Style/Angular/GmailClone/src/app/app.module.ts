import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FirstComponent } from './Components/header/first/first.component';
import { SecondComponent } from './Components/header/second/second.component';
import { ThirdComponent } from './Components/header/third/third.component';
import { ComposeComponent } from './Components/side-Nav/compose/compose.component';
import { NavBarComponent } from './Components/side-Nav/nav-bar/nav-bar.component';
import { MessageboxComponent } from './Components/messagebox/messagebox.component';
import { MailmessageComponent } from './Components/mailmessage/mailmessage.component';

@NgModule({
  declarations: [
    AppComponent,
    FirstComponent,
    SecondComponent,
    ThirdComponent,
    ComposeComponent,
    NavBarComponent,
    MessageboxComponent,
    MailmessageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
