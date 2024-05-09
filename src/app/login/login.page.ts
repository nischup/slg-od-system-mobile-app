import { Component, OnInit } from '@angular/core';
import { Location } from "@angular/common";
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { UserService } from '../api/user.service';
import { AuthenticationService } from '../services/authentication.service';
import { LoadingController, ToastController, AlertController } from '@ionic/angular';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})

export class LoginPage implements OnInit {
 	submitted: boolean = false;
	loginForm: FormGroup;
	data: any;
	typeList: any;
	showProgressBar: boolean = true;
	userlogin_data: any;

  constructor(
  		private router: Router,
  		private loadingCtrl: LoadingController, 
	  	private toastCtrl: ToastController,
	  	private http: HttpClient, 
	  	private formBuilder: FormBuilder, 
	  	public auth: AuthenticationService, 
	  	private userService: UserService
	  	) { 
   			this.loginForm = this.formBuilder.group({
                username: ['', [Validators.required]],
                password: ['', [Validators.required, Validators.minLength(6)]]
              });
			// this.getdata();

			const user_data: string | null = localStorage.getItem('user');
			if (user_data !== null) {
			  this.userlogin_data = JSON.parse(user_data);
			  this.router.navigateByUrl('/tabs/tab1');
			}else{
				this.router.navigateByUrl('/login');
			}
  }

 ngOnInit() {
    this.startTimer();
  }

   startTimer() {
    setTimeout(() => {
      this.showProgressBar = false;
    }, 5000); // 5 seconds
  }

  getdata(){
  	this.userService.hrmLeaveType().subscribe(res => {
  		this.typeList = res;
	}, err => {
            if (err) {
                     this.toast('Sorry No data Found', 2000);
            }
        });
  }

	public login() {
		this.submitted = true;
		if(this.loginForm.value.username && this.loginForm.value.password){

		this.userService.login(this.loginForm.value).subscribe((result: any) => {
				this.loadBalance();
			    if ('status' in result) {
			        const status = result['status'] as string; 
			        if (status === "success") {
				        const data = result['data'] as string; 
						localStorage.setItem('user', JSON.stringify(data));
						this.auth.setLoginStatus(true);
						this.router.navigate(['tabs/tab1']);
			        	// console.log(data);
			        }else{
			        	this.toast('Sorry !!! your login details not matching to server..', 5000);
			        	
			        }
			    } else {
			        this.toast('Please enter valid login data!', 5000);
			    }
			});

		}else{
			 this.toast('Please Enter Login Details', 5000);

		}
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

	 get e() {
        return this.loginForm.controls;
    }

      async showLoading() {
		  const loading = await this.loadingCtrl.create({
		    message: 'Authenticating...', 
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

}
