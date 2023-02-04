import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { ShellModule } from './shell/shell.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { ConfirmationService } from 'primeng/api';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    CoreModule,
    ShellModule,
    AppRoutingModule,
  ],
   
  providers: [ ConfirmationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
