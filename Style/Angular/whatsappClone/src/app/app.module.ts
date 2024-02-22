import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { ContentComponent } from './components/content/content.component';
import { MainContentComponent } from './components/main-content/main-content.component';
import { ChatComponent } from './components/chat/chat.component';
import { ChatheaderComponent } from './components/chatheader/chatheader.component';
import { ChatsearchComponent } from './components/chatsearch/chatsearch.component';
import { ChatboxComponent } from './components/chatbox/chatbox.component';
import { MessageComponent } from './components/message/message.component';
import { MessageheaderComponent } from './components/messageheader/messageheader.component';
import { ChatmessageComponent } from './components/chatmessage/chatmessage.component';
import { MessagefooterComponent } from './components/messagefooter/messagefooter.component';
import { WindowchatmessageComponent } from './components/windowchatmessage/windowchatmessage.component';
import { FormsModule } from '@angular/forms';
import { MessageTextComponent } from './message-text/message-text.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ContentComponent,
    MainContentComponent,
    ChatComponent,
    ChatheaderComponent,
    ChatsearchComponent,
    ChatboxComponent,
    MessageComponent,
    MessageheaderComponent,
    ChatmessageComponent,
    MessagefooterComponent,
    WindowchatmessageComponent,
    MessageTextComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
