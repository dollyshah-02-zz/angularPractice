import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BikeModule } from './bike/bike.module';
import { CarModule } from './car/car.module';
import { CycleModule } from './cycle/cycle.module';



@NgModule({
  imports: [
    CommonModule,BikeModule,CarModule,CycleModule
  ],
  declarations: [],
  exports:[CarModule,BikeModule,CycleModule]
})
export class VehicleModule { }
