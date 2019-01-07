import { Component, OnInit, OnChanges, Input, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy } from '@angular/core';
import { Student } from '../student';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.css']
})
export class DemoComponent implements OnInit, Student

{

 

  constructor() {
    console.log("in constructor");
   }

   ngOnInit() {
    //  console.log("in on init");
   }
  // ngOnChanges(){
  //   console.log("in on change");
  // }
  // ngDoCheck(){
  //   console.log("in do check");
  // }
  // ngAfterContentInit(){
  //   console.log("in after content init");
  // }
  // ngAfterContentChecked(){
  //   console.log("in after content checked");
  // }
  // ngAfterViewInit(){
  //   console.log("in after view init");
  // }
  // ngAfterViewChecked(){
  //   console.log("in after view checked");
  // }
  // ngOnDestroy(){
  //   console.log("in on destroy");
  // }
  // @Input() name:string;


  // title = 'My first app';
  // xyz=4;
   text:string="text";
   typeChange(type){
     this.text=type;
  }
  goalText = "MY DREAM";

  studentName: string;
  studentAge: number;
  students: Array<any> = [];
  firstNo:number;
  first: boolean=false;

  checkNo(firstNo) {
    this.firstNo = firstNo;
    if (this.firstNo % 2 == 0) {
     // console.log("true");
      this.first=!this.first;
      //console.log(this.first);
    
    } else {
      //console.log("false");
      this.first=false;
      //console.log(this.first);
      
    }{
      
    }
  }

  add(): Student {
    const student = {
      studentName: this.studentName,
      studentAge: this.studentAge,

    };
    this.students.push(student);
    return student;


  }


  isLogged: boolean = false;

  checkValue(type) {
    console.log(type);
  
    this.isLogged = !this.isLogged;
  }
  
}

