import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; // 1. Imported Angular Animation Module
import { NgModule } from '@angular/core';

import { MatToolbarModule } from '@angular/material/toolbar'; // 2. Imported Material Toolbar Module
import { FlexLayoutModule } from '@angular/flex-layout'; // 3. Imported Flex-Layout Module

import 'hammerjs'; // 4. Imported HammerJS

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [  // 5. updated JS object with modules which should be imported for root or AppModule component
    BrowserModule,
    BrowserAnimationsModule,  // 5.1
    MatToolbarModule,         // 5.2
    FlexLayoutModule          // 5.3
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
