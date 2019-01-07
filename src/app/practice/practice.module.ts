import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DemoComponent } from './demo/demo.component';
import { FormsModule } from '@angular/forms';
import { Demo2Component } from './demo2/demo2.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [DemoComponent, Demo2Component],
  exports:[DemoComponent,Demo2Component]
})


export class PracticeModule { }
