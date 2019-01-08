import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-bike-table',
  templateUrl: './bike-table.component.html',
  styleUrls: ['./bike-table.component.css']
})
export class BikeTableComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  @Input('BikeModel') BikeModel:string;
  @Input('BikeType') BikeType:string;
  @Input('BikeBrand') BikeBrand:string;
  @Input('BikeEngine') BikeEngine:string;
  @Input('BikeDate') BikeDate:string;
}
