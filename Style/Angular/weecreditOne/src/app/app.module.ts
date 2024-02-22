import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ContentTwoComponent } from './content-two/content-two.component';
import { ContentThreeComponent } from './content-three/content-three.component';
import { ContentFourComponent } from './content-four/content-four.component';
import { ContentFiveComponent } from './content-five/content-five.component';
import { ContentSixComponent } from './content-six/content-six.component';
import { ChildOneComponent } from './header/child-one/child-one.component';
import { ChildTwoComponent } from './header/child-two/child-two.component';
import { ChildThreeComponent } from './content-two/child-three/child-three.component';
import { ChildFourComponent } from './content-two/child-four/child-four.component';
import { ChildFiveComponent } from './content-three/child-five/child-five.component';
import { ChildSixComponent } from './content-three/child-six/child-six.component';
import { ChildSevenComponent } from './content-four/child-seven/child-seven.component';
import { ChildEightComponent } from './content-four/child-eight/child-eight.component';
import { ChildNineComponent } from './content-five/child-nine/child-nine.component';
import { ChildTenComponent } from './content-five/child-ten/child-ten.component';
import { ChildElevenComponent } from './content-six/child-eleven/child-eleven.component';
import { ChildTwelveComponent } from './content-six/child-twelve/child-twelve.component';
import { FooterComponent } from './footer/footer.component';
import { ThirteenComponent } from './footer/thirteen/thirteen.component';
import { FourteenComponent } from './footer/fourteen/fourteen.component';
import { ContentOneComponent } from './content-one/content-one.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { LoansComponent } from './loans/loans.component';
import { CardsComponent } from './cards/cards.component';
import { ContactUsComponent } from './contact-us/contact-us.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ContentTwoComponent,
    ContentThreeComponent,
    ContentFourComponent,
    ContentFiveComponent,
    ContentSixComponent,
    ChildOneComponent,
    ChildTwoComponent,
    ChildThreeComponent,
    ChildFourComponent,
    ChildFiveComponent,
    ChildSixComponent,
    ChildSevenComponent,
    ChildEightComponent,
    ChildNineComponent,
    ChildTenComponent,
    ChildElevenComponent,
    ChildTwelveComponent,
    FooterComponent,
    ThirteenComponent,
    FourteenComponent,
    ContentOneComponent,
    AboutUsComponent,
    LoansComponent,
    CardsComponent,
    ContactUsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
