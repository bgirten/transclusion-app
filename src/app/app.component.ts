import { Component } from '@angular/core';
import { FirstPageComponent } from './first-page/first-page.component';
import { SecondPageComponent } from './second-page/second-page.component';
import { DialogService } from './dialog.service';
import { HorizontalStepperComponent } from './horizontal-stepper/horizontal-stepper.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Transclusion App';

  constructor(private dialogService: DialogService) {}

  launchDialog() {
    const componentsArray = [
      FirstPageComponent,
      SecondPageComponent
    ]
    const dialogPayload = {};
    dialogPayload['stepperComponents'] = componentsArray;
    dialogPayload['usefulStuff'] = 'any type of data can be passed to dynamic components';
    const transclusionDialog = this.dialogService.launchDialog(HorizontalStepperComponent,
                                                               dialogPayload,
                                                               800, 600);
  }
  

}
