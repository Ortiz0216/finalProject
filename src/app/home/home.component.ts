import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  clickCounter: number = 0;
  clickCounter2: number = 0;
  name: string = '';

  constructor() { }

  ngOnInit() {
  }

  countClick1(){
    this.clickCounter += 1;
  }
  countClick2(){
    this.clickCounter2 += 1;
  }

  setClasses(){
    let myClasses = {
      active: this.clickCounter > 4,
      notactive: this.clickCounter <= 4
    }
    return myClasses;
  }
}
