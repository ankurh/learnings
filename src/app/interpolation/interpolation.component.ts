import { Component, OnInit } from '@angular/core';
import { FunctionCall } from '../../../node_modules/@angular/compiler';

@Component({
  selector: 'app-interpolation',
  templateUrl: './interpolation.component.html',
  styleUrls: ['./interpolation.component.css']
})
export class InterpolationComponent  implements OnInit {

  myname: String=" example ";
  mycontainer: String=" Interpolation ";

  myProperty:boolean = true;

    constructor(){
      setTimeout(function(){this.myProperty = false},5000);
    }
  ngOnInit() {
    

  };
}
