import { Component, OnInit } from '@angular/core';
import { NavController, NavParams, LoadingController, ToastController, AlertController } from '@ionic/angular';
import { UserService } from '../api/user.service';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { AuthenticationService } from '../services/authentication.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-leave-application',
  templateUrl: './new-leave-application.page.html',
  styleUrls: ['./new-leave-application.page.scss'],
})
export class NewLeaveApplicationPage implements OnInit {

	leaveForm!: FormGroup;
	typeList: any;
	empList: any;
	userlogin_data: any;
	unchangedFields: any;

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

			this.leaveForm = this.formBuilder.group({
          name: [this.unchangedFields.name],
      		emp_id_no: [this.unchangedFields.emp_id_no],
          leave_type: ['', [Validators.required]],
	        leave_date: [currentDate, [Validators.required]],
	        responsible_emp_id_no: [''],
	        leave_message: ['', [Validators.required]],
	        created_by: this.userlogin_data.id,
          });

					this.getLeaveType();
					this.getEMployees();

    }

		ngOnInit() {
		 
		}

		navigate(){
		   this.router.navigate(['/tabs/leave'])
		}

	    getLeaveType(){
		  	this.userService.hrmLeaveType().subscribe(res => {
		  		this.typeList = res;
		  		// console.log(this.typeList);
			}, err => {
		            if (err) {
		                     console.log('no data found');
		            }
		        });
		}	    

		getEMployees(){
		  	this.userService.employeeList().subscribe(res => {
		  		this.empList = res;
		  		console.log(this.empList);
			}, err => {
		            if (err) {
		                     console.log('no data found');
		            }
		        });
		}

		sendNewApplication() {
		
	 		this.userService.leaveApplication(this.leaveForm.value).subscribe((result: any) => {

	 			console.log(this.leaveForm.value);

			    if ('status' in result) {
			        const status = result['status'] as string; 
			        if (status === "success") {
						this.router.navigate(['tabs/leave']);
						this.leaveForm.reset({
					      ...this.unchangedFields,
					    });
			        	this.toast('Your Leave Application submitted for approval !!! Thank You', 5000);
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

    refreshPage() {
		  window.location.reload();

		}

}
