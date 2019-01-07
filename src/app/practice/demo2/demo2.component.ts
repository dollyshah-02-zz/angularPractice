import { Component, OnInit, OnChanges } from '@angular/core';

@Component({
  selector: 'app-demo2',
  templateUrl: './demo2.component.html',
  styleUrls: ['./demo2.component.css']
})
export class Demo2Component implements OnInit,OnChanges {

  people: Array<any>;
  constructor() { }

  ngOnInit() {
    this.people = [{
      name: 'dolly', country: 'usa'
    }, {
      name: 'asma', country: 'india'
    }];
    console.log("in on init");
  }
  ngOnChanges(){
    console.log("in on changes");
  }
 
  getColor(country){
    switch(country){
      case "usa":return "blue";
      case "india":return "green";
    }
  }
  button={
    'background-color':'gray'
}


}
