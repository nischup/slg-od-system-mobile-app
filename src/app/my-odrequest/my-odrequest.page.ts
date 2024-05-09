import { Component, OnInit } from '@angular/core';
import { NavController, NavParams, LoadingController, ToastController } from '@ionic/angular';
import { Router } from '@angular/router';
import { UserService } from '../api/user.service';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { AuthenticationService } from '../services/authentication.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-my-odrequest',
  templateUrl: './my-odrequest.page.html',
  styleUrls: ['./my-odrequest.page.scss'],
})
export class MyODRequestPage implements OnInit {

	odForm!: FormGroup;
	userlogin_data: any;
	myOD: any;

   constructor(
   		private router: Router,
   		private loadingCtrl: LoadingController, 
	  	private toastCtrl: ToastController,
	  	private http: HttpClient, 
	  	private formBuilder: FormBuilder, 
	  	public auth: AuthenticationService, 
	  	private userService: UserService
	  	) {

			const user_data: string | null = localStorage.getItem('user');
			if (user_data !== null) {
			  this.userlogin_data = JSON.parse(user_data);
			}else{
				this.router.navigateByUrl('/login');
			}

			const currentDate = new Date();
			const currentMonthFirstDay = new Date(currentDate.getFullYear(), currentDate.getMonth(), 2);
			const currentMonthLastDay = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 1);

			const formattedCurrentMonthFirstDay = currentMonthFirstDay.toISOString().substring(0, 10);
			const formattedCurrentMonthLastDay = currentMonthLastDay.toISOString().substring(0, 10);

   			this.odForm = this.formBuilder.group({
            name: this.userlogin_data.name,
            emp_id_no: this.userlogin_data.emp_id_no,
            start_date: new FormControl(formattedCurrentMonthFirstDay),
	        end_date: new FormControl(formattedCurrentMonthLastDay),
	        created_by: this.userlogin_data.id,
          });

	  	 }

  ngOnInit() {
  }

  navigate(){
    this.router.navigate(['/tabs/od-home'])
  }


	searchODRequest(data: any){
		this.loadBalance();
		this.userService.getMyODRequest(data).subscribe((res:any) => {
  		this.myOD = res;
  		// console.log(this.myLeave);
		}, err => {
	            if (err) {
	             console.log('no data found');
	            }
	    });
	}

	async toast(msg?: string | undefined, dur?: number | undefined, clr?: string | undefined) {
        const toast = await this.toastCtrl.create({
            header: msg,
            duration: dur,
            color: clr,
            buttons: [{icon: 'close-circle-outline', role: 'cancel'}]
        });
        await toast.present();
    }

	async showLoading() {
	  const loading = await this.loadingCtrl.create({
	    message: 'Please Wait your data is Loading...', 
	    spinner: 'dots', 
	    translucent: true, 
	    cssClass: 'custom-loader-class', 
	    duration: 3000 
	  });
	  await loading.present();
	}

	async loadBalance() {
	  await this.showLoading();
	  await this.loadingCtrl.dismiss();

	}

		refreshPage() {
	  window.location.reload();
	}

}
