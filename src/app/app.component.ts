import { AfterContentInit, Component, ComponentFactoryResolver, ComponentRef, ViewChild, ViewContainerRef, Injector } from '@angular/core';
import { FirstPageComponent } from './first-page/first-page.component';
import { SecondPageComponent } from './second-page/second-page.component';
import { MatStepper } from '@angular/material';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent implements AfterContentInit {

  title = 'Transclusion App';
  componentRef: ComponentRef<any>;
  stepperComponents = [];
  injector: Injector;
  @ViewChild('stepper') stepper: MatStepper;


  constructor(private resolver: ComponentFactoryResolver) {}
  ngAfterContentInit() {
    if(this.componentRef) {
      this.componentRef.destroy();
    }
    // transclude the 1st page
    let componentFactory = this.resolver.resolveComponentFactory(FirstPageComponent);
    let componentRef = componentFactory.create(this.injector, []);
    this.stepperComponents.push(componentRef.instance);
    // ...and now the 2nd page
    componentFactory = this.resolver.resolveComponentFactory(SecondPageComponent);
    componentRef = componentFactory.create(this.injector, []);
    this.stepperComponents.push(componentRef.instance);
  }

  ngDestroy() {
    this.componentRef.destroy();
  }
  
}
