import { Component, OnInit } from '@angular/core';
import { NavController, NavParams, LoadingController, ToastController, AlertController } from '@ionic/angular';
import { UserService } from '../api/user.service';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import {AuthenticationService} from '../services/authentication.service';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Router} from '@angular/router';

@Component({
  selector: 'app-new-odrequest',
  templateUrl: './new-odrequest.page.html',
  styleUrls: ['./new-odrequest.page.scss'],
})
export class NewODRequestPage implements OnInit {

 	odForm!: FormGroup;
	companyList: any;
	userlogin_data: any;
	unchangedFields: any;
	other: boolean = false;

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
			  // console.log(this.userlogin_data);
			}else{
				this.router.navigateByUrl('/login');
			}

			this.unchangedFields = {
		      name: this.userlogin_data.name,
		      emp_id_no: this.userlogin_data.emp_id_no,
		    };

 			const currentDate = new Date().toISOString().substring(0, 10); // Get current date in the format "YYYY-MM-DD"

			this.odForm = this.formBuilder.group({
          name: [this.unchangedFields.name],
      		emp_id_no: [this.unchangedFields.emp_id_no],
      		mobile_no: ['', [Validators.required]],
          od_date: [currentDate, Validators.required],
          visit_from: ['', [Validators.required]],
	        visit_to: ['', [Validators.required]],
	        other: '',
	        back_to_office: ['', [Validators.required]],
	        visitor_no: ['', [Validators.required]],
	        food_request: '',
	        food_hospitality_by: '',
	        approval_message: ['', [Validators.required]],
	        visitor_details: '',
	        comments: '',
	        created_by: this.userlogin_data.id,
          });

		this.getComapnyList();
    }

	  ngOnInit() {

	  }

	getComapnyList(){
	  	this.userService.hrmcompanyList().subscribe(res => {
	  		this.companyList = res;
		}, err => {
	            if (err) {
	               console.log('no data found');
	            }
	        });
	}


   	navigate(){
    	this.router.navigate(['/tabs/od-home'])
	}

	  sendNewApplication(){

	 	this.userService.odApplication(this.odForm.value).subscribe((result: any) => {
	    if ('status' in result) {
		        const status = result['status'] as string; 
		        if (status === "success") {

							this.router.navigate(['tabs/od-home']);
							// this.odForm.reset();
							this.odForm.reset({
						      ...this.unchangedFields,
						    });
		        	this.toast('Your OD Application submitted for approval !!! Thank You', 5000);
		        }else{
		        	this.toast('Sorry !!! something went worng', 5000);
		        	
		        }


		    } else {
		        this.toast('Please enter valid login data!', 5000);
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


	  getSelectedValue(event: any) {
	    const selectedValue = event.detail.value;
	    if (selectedValue == 7) {
	    	this.other = true;
	    }else{
	    	this.other = false;	
	    	this.odForm.get('other')?.reset();
	    }
	  }


	refreshPage() {
	  window.location.reload();
	}

}
