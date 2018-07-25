import { Component, OnInit } from '@angular/core';
import { DynamicInterface } from '../dynamic-component/dynamic-interface';

@Component({
  selector: 'app-first-page',
  templateUrl: './first-page.component.html',
  styleUrls: ['./first-page.component.css']
})
export class FirstPageComponent implements OnInit, DynamicInterface {

  payload: any;
  title: string = 'First Page';
  
  constructor() { }


  ngOnInit() {
  }


  resolveDynamicComponentClass() {
    return FirstPageComponent;
  }

}
