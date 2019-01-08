import { Component, OnInit, Input, OnChanges } from '@angular/core';
import {Car} from "../car"
import {CarEnum} from "../car.enum"
@Component({
  selector: 'app-car-table',
  templateUrl: './car-table.component.html',
  styleUrls: ['./car-table.component.css']
})
export class CarTableComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  @Input('CarObject') CarObject:Car;
  
  
  // @Input('cwheel') carWheel:number;
  // @Input('cseat') carSeat:number;
  // @Input('ctype') carType:string;
  // @Input('cbrand') carBrand:string;
  // @Input('cdate') carDate:string;

  // ngOnChanges(){
  //   console.log(this.CarObject);
  // }
  
}
