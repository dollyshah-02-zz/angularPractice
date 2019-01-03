import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BikeModule } from './bike/bike.module';
import { BikeFormComponent } from './bike/bike-form/bike-form.component';
import { DemoComponent } from './bike/bike-form/demo/demo.component';

@NgModule({
  imports: [
    CommonModule,BikeModule
  ],
  declarations: [BikeFormComponent,DemoComponent],
  exports:[BikeFormComponent,DemoComponent]
})
export class VehicleModule { }
