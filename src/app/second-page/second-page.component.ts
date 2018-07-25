import { Component, OnInit } from '@angular/core';
import { DynamicInterface } from '../dynamic-component/dynamic-interface';

@Component({
  selector: 'app-second-page',
  templateUrl: './second-page.component.html',
  styleUrls: ['./second-page.component.css']
})

export class SecondPageComponent implements OnInit, DynamicInterface {

  payload: any;
  componentTitle: string = 'Second Page';
  
  constructor() { }

  ngOnInit() {
  }

  resolveDynamicComponentClass() {
    return SecondPageComponent;
  }

}
