import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HorizontalStepperComponent } from './horizontal-stepper/horizontal-stepper.component';
import { FirstPageComponent } from './first-page/first-page.component';
import { SecondPageComponent } from './second-page/second-page.component';
import { DialogComponent } from './dialog/dialog.component';

import { MatStepperModule } from '@angular/material';
import { MatDialogModule, MAT_DIALOG_DATA } from '@angular/material/dialog'
import { DialogService } from './dialog.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DynamicComponentComponent } from './dynamic-component/dynamic-component.component';

@NgModule({
  entryComponents: [
    DialogComponent,
    DynamicComponentComponent,
    HorizontalStepperComponent,
    FirstPageComponent,
    SecondPageComponent
  ],
  declarations: [
    AppComponent,
    HorizontalStepperComponent,
    FirstPageComponent,
    SecondPageComponent,
    DialogComponent,
    DynamicComponentComponent,
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    MatDialogModule,
    MatStepperModule
  ],
  providers: [DialogService],
  bootstrap: [AppComponent]
})
export class AppModule { }
