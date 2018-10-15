import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { WarningComponent } from './warning/warning.component';
import { SuccessComponent } from './success/success.component';
import {MessageService} from './message.service';

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
      useValue: {
        show() {
          return 'You have been hacked!';
        }
      },
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
