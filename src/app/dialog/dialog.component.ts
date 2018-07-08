import { Component, AfterContentInit, Inject, ComponentRef, ViewContainerRef, ViewChild, ComponentFactoryResolver, OnDestroy, ChangeDetectorRef } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})
export class DialogComponent implements AfterContentInit {
  componentRef: ComponentRef<any>;
  @ViewChild('dialogComponentContent', {read: ViewContainerRef}) dialogComponentContent;

  constructor(public dialogRef: MatDialogRef<DialogComponent>,
              @Inject(MAT_DIALOG_DATA) public data: any,
              private resolver: ComponentFactoryResolver) { }

  ngAfterContentInit() {
    if(this.componentRef) {
      this.componentRef.destroy();
    }
    const componentFactory = this.resolver.resolveComponentFactory(this.data.component);
    this.componentRef = this.dialogComponentContent.createComponent(componentFactory);
    this.componentRef.instance.payload = this.data.payload;
  }

  ngDestroy() {
    this.dialogComponentContent.remove();
    this.dialogComponentContent = null;
    this.componentRef.destroy();
  }

}
