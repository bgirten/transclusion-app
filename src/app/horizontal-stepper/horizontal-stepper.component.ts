import { Component, OnInit, AfterContentInit, ViewChild, ViewContainerRef, ComponentRef, ComponentFactoryResolver, Injector } from '@angular/core';
import { MatStepper } from '@angular/material';


@Component({
  selector: 'app-horizontal-stepper',
  templateUrl: './horizontal-stepper.component.html',
  styleUrls: ['./horizontal-stepper.component.css']
})


export class HorizontalStepperComponent implements AfterContentInit {
  payload: any;
  stepperComponents = [];
  injector: Injector;
  @ViewChild('stepper') stepper: MatStepper;
  
  
  constructor(private resolver: ComponentFactoryResolver) { }

  ngAfterContentInit() {
    this.instantiateDynamicComponents(this.payload.stepperComponents);
  }


  instantiateDynamicComponents(dynamicComponents) {
    dynamicComponents.forEach(dynamicComponent => {
      const componentFactory = this.resolver.resolveComponentFactory(dynamicComponent);
      const componentRef = componentFactory.create(this.injector, []);
      this.stepperComponents.push(componentRef.instance);
    });
  }

}
