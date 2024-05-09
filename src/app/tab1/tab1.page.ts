import { Component } from '@angular/core';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

showProgressBar: boolean = true;

  constructor() {}

  async scheduleNotification(){
  	
  }

   ngOnInit() {
    this.startTimer();
  }

   startTimer() {
    setTimeout(() => {
      this.showProgressBar = false;
    }, 5000); // 5 seconds
  }

}
