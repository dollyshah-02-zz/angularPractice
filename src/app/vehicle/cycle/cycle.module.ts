import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CycleFormComponent } from './cycle-form/cycle-form.component';
import { CycleTableComponent } from './cycle-table/cycle-table.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [CycleFormComponent,CycleTableComponent],
  exports:[CycleFormComponent,CycleTableComponent]
})
export class CycleModule { }
