import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bike-form',
  templateUrl: './bike-form.component.html',
  styleUrls: ['./bike-form.component.css']
})
export class BikeFormComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  bModel:string;
  bType:string;
  bBrand:string;
  bEngine:string;
  bDate:string;

}
