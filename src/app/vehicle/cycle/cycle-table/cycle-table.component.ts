import { Component, OnInit } from '@angular/core';
import {Cycle} from '../cycle'

@Component({
  selector: 'app-cycle-table',
  templateUrl: './cycle-table.component.html',
  styleUrls: ['./cycle-table.component.css']
})
export class CycleTableComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  cycle:Array<any>=[];
  
  parentMethod(cycle:Cycle){
    //console.log(cycle);
    this.cycle.push(cycle);
    
  }
}
