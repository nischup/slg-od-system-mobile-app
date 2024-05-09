import { Component, OnInit } from '@angular/core';
import { NavController, NavParams, LoadingController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-leave',
  templateUrl: './leave.page.html',
  styleUrls: ['./leave.page.scss'],
})
export class LeavePage implements OnInit {

loading:any;
userlogin_data:any;
pendingODList:any;
showProgressBar: boolean = true;

 constructor(
 	private router: Router, 
 	public navCtrl: NavController, 
 	private loadingCtrl: LoadingController,
 	) { 

		const user_data: string | null = localStorage.getItem('user');
			if (user_data !== null) {
			  this.userlogin_data = JSON.parse(user_data);
			}
 }

  ngOnInit() {
  }

  
   navigate(){
    this.router.navigate(['/tabs/hrm-home'])
  }

}
