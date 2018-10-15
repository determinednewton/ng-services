import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { WarningComponent } from './warning/warning.component';
import { SuccessComponent } from './success/success.component';
import {MessageService} from './message.service';
import {BestMessageService} from './best-message.service';

@NgModule({
  declarations: [
    AppComponent,
    WarningComponent,
    SuccessComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    {
      provide: MessageService,
      useClass: BestMessageService,
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
