import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Cycle } from '../cycle';

@Component({
  selector: 'app-cycle-form',
  templateUrl: './cycle-form.component.html',
  styleUrls: ['./cycle-form.component.css']
})
export class CycleFormComponent implements OnInit,Cycle {

  constructor() { }
  @Output() CycleObject:EventEmitter<Cycle> = new EventEmitter<Cycle>();
  
  ngOnInit() {
  }
  cycleModel:string;
  cycleType:string;
  cycleBrand:string;
  cycleEngine:string;
  cycleDate:string;
  cycle:Array<any>=[];

  childMethod() {
    const cycleobj={
    cycleModel:this.cycleModel,
    cycleType:this.cycleType,
    cycleBrand:this.cycleBrand,
    cycleEngine:this.cycleEngine,
    cycleDate:this.cycleDate
    }
    //console.log(cycleobj);
    this.CycleObject.emit(cycleobj);
  
}

}
