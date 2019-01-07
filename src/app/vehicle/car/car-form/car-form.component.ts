import { Component, OnInit, } from '@angular/core';
import {Car} from "../car";

@Component({
  selector: 'app-car-form',
  templateUrl: './car-form.component.html',
  styleUrls: ['./car-form.component.css']
})
export class CarFormComponent extends Car implements OnInit {
  
  constructor() { 
    super();
  }
  car:Array<any>=[];
  cModel:string;
  cSeats:number;
  cWheels:number;
  cBrand:string;
  cEngine:string;
  cType:string;
  cDate:string;

  getValue():Car{
  const carobj={
    CarModel:this.cModel,
    NoOfWheels:this.cWheels,
    NoOfSeats:this.cSeats,
    CarBrand:this.cBrand,
    CarEngine:this.cEngine,
    CarType:this.cType,
    CarDateOfPurchase:this.cDate
    };
    this.car.push(carobj);
    console.log(this.car);
    return carobj;
  }
  
  ngOnInit() {
    
  }

}
