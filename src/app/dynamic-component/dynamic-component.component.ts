import { Component, OnInit, AfterContentInit, Input, ComponentRef, ViewChild, ViewContainerRef, ComponentFactoryResolver, ChangeDetectorRef } from '@angular/core';
import { DynamicInterface } from './dynamic-interface';

@Component({
  selector: 'dynamic-component',
  templateUrl: './dynamic-component.component.html',
  styleUrls: ['./dynamic-component.component.css']
})

export class DynamicComponentComponent implements AfterContentInit {
  componentRef: ComponentRef<any>;
  @Input() component: DynamicInterface;
  @Input() payload: any;
  @ViewChild('dynamiccomponent', {read: ViewContainerRef}) dynamicComponent;

  constructor(private resolver: ComponentFactoryResolver,
              private changeDetectorRef: ChangeDetectorRef) { }

  ngAfterContentInit() {
    let componentFactory = this.resolver.resolveComponentFactory(this.component.resolveDynamicComponentClass());
    this.componentRef = this.dynamicComponent.createComponent(componentFactory);
    this.componentRef.instance.payload = this.payload;
  }

}
