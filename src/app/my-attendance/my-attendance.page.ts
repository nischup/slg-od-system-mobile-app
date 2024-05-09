import { Component, OnInit } from '@angular/core';
import { NavController, NavParams, LoadingController } from '@ionic/angular';
import { Router } from '@angular/router';


@Component({
  selector: 'app-my-attendance',
  templateUrl: './my-attendance.page.html',
  styleUrls: ['./my-attendance.page.scss'],
})
export class MyAttendancePage implements OnInit {

   constructor(private router: Router, public navCtrl: NavController,) { }

  ngOnInit() {
  }

  navigate(){
    this.router.navigate(['/tabs/hrm-home'])
  }

}
