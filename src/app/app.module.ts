import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { pwfieldComponent } from './pwfield/pwfield.component'
import { buttonComponent } from './button/button.component'
@NgModule({
  declarations: [
    AppComponent,
    pwfieldComponent,
    buttonComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
