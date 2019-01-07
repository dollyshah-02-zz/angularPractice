import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BikeFormComponent } from './bike-form/bike-form.component';
import { DemoComponent } from './bike-form/demo/demo.component';
import { BikeTableComponent } from './bike-table/bike-table.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [BikeFormComponent,BikeTableComponent],
  exports:[BikeFormComponent,BikeTableComponent]
})
export class BikeModule { }
