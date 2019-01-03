import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
//import { FormComponent } from './car/form/form.component';
import { CarModule } from './car/car.module';
import { VehicleModule } from './vehicle/vehicle.module';

@NgModule({
  declarations: [
    AppComponent,
    // FormComponent
    
  ],
  imports: [
    BrowserModule,
    CarModule,
    VehicleModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
