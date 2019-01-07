import { Component, OnInit, Input, OnChanges } from '@angular/core';
import {Car} from "../car"
@Component({
  selector: 'app-car-table',
  templateUrl: './car-table.component.html',
  styleUrls: ['./car-table.component.css']
})
export class CarTableComponent implements OnInit,OnChanges {

  constructor() { }

  ngOnInit() {
  }
  @Input('CarObject') CarObject:Car;
  count:number=0;
  
  // @Input('cwheel') carWheel:number;
  // @Input('cseat') carSeat:number;
  // @Input('ctype') carType:string;
  // @Input('cbrand') carBrand:string;
  // @Input('cdate') carDate:string;

  ngOnChanges(){
    console.log(this.CarObject);
  }
  
}
