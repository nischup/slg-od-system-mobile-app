import { Component, OnInit } from '@angular/core';
import { NavController, NavParams, LoadingController } from '@ionic/angular';
import { Router } from '@angular/router';
@Component({
  selector: 'app-hrm-home',
  templateUrl: './hrm-home.page.html',
  styleUrls: ['./hrm-home.page.scss'],
})
export class HrmHomePage implements OnInit {

  constructor(private router: Router, public navCtrl: NavController,) { }

  ngOnInit() {
  }

   navigate(){
    this.router.navigate(['/tabs/tab1'])
  }

}
