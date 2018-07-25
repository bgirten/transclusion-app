import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatStepperModule } from '@angular/material';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { DynamicComponentComponent } from './dynamic-component/dynamic-component.component';
import { FirstPageComponent } from './first-page/first-page.component';
import { SecondPageComponent } from './second-page/second-page.component';

@NgModule({
  entryComponents: [
    DynamicComponentComponent,
    FirstPageComponent,
    SecondPageComponent
  ],
  declarations: [
    AppComponent,
    DynamicComponentComponent,
    FirstPageComponent,
    SecondPageComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatStepperModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
