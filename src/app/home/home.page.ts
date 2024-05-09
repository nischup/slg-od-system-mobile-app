import { Component, OnInit } from '@angular/core';
import { LocalNotifications, ScheduleOptions, CancelOptions } from '@capacitor/local-notifications';


@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})

export class HomePage implements OnInit {

parsedUserData:any;

  constructor() { 

  	const user_data: string | null = localStorage.getItem('user');
		if (user_data !== null) {
		  const parsedUserData = JSON.parse(user_data);
		  console.log(parsedUserData);
		} 

	}

  ngOnInit() {
  }

async scheduleNotification(){

	let options:ScheduleOptions = {

  		notifications:[
	  		{
	  			id:111,
	  			title:"Reminder Notification",
	  			body:"Explore the new things everyday",
	  			largeBody:"Get 30 % discount of this products",
	  			summaryText:"Exciting offer",
	  			largeIcon:'res://drawable/icon/chat',
	  			sound: 'beep.wav',
	  			smallIcon:'res://drawable/icon/chat'
	  		},		
	  		{
	  			id:112,
	  			title:"Upgrade Notification",
	  			body:"Upgrade user subscription",
	  			largeBody:"Get 30 % discount of this products",
	  			summaryText:"Required Action !!!",
	  			largeIcon:'res://drawable/icon/notification',
	  			smallIcon:'res://drawable/icon/notification',
	  			sound: 'beep.wav'
	  		}
  		]
  	}
  	try{
  		await LocalNotifications.schedule(options)
  	}
  	catch(ex){
  		alert(JSON.stringify(ex))
  	}

}


async removeAllDeliveredNotifications(){
	await LocalNotifications.removeAllDeliveredNotifications();
}


}
