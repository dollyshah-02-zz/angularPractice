import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormComponent } from './form/form.component';
import { TableComponent } from './table/table.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [FormComponent, TableComponent],
  exports :[FormComponent,TableComponent],

})
export class CarModule { }
