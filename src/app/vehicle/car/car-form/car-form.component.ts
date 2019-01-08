import { Component, OnInit, } from '@angular/core';
import {Car} from "../car";
import {CarEnum} from "../car.enum"

@Component({
  selector: 'app-car-form',
  templateUrl: './car-form.component.html',
  styleUrls: ['./car-form.component.css']
})
export class CarFormComponent extends Car implements OnInit {
  
  constructor() { 
    super();
    //console.log(CarEnum.HATCHBACK);
  }
  
  car:Array<any>=[];
  cModel:string;
  cSeats:number;
  cWheels:number;
  cBrand:string;
  cEngine:string;
  cType:string;
  cDate:string;
  cPrice:CarEnum;

  getValue(){
  const carobj={
    CarModel:this.cModel,
    NoOfWheels:this.cWheels,
    NoOfSeats:this.cSeats,
    CarBrand:this.cBrand,
    CarEngine:this.cEngine,
    CarType:CarEnum[this.cType],
    CarDateOfPurchase:this.cDate,
    cPrice:this.cType
    };
    this.car.push(carobj);
    console.log(this.car);
    console.log(CarEnum[this.cType])
   // return carobj;
  }
  
  ngOnInit() {
    
  }

}
