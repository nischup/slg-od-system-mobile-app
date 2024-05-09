import { Component, OnInit } from '@angular/core';
import { NavController, NavParams, LoadingController, ToastController } from '@ionic/angular';
import { Router } from '@angular/router';
import { UserService } from '../api/user.service';

@Component({
  selector: 'app-leave-dept-approval',
  templateUrl: './leave-dept-approval.page.html',
  styleUrls: ['./leave-dept-approval.page.scss'],
})
export class LeaveDeptApprovalPage implements OnInit {

loading:any;
userlogin_data:any;
pendingLeaveList:any;
showProgressBar: boolean = true;

 constructor(
 	private router: Router, 
 	public navCtrl: NavController, 
 	private userService: UserService, 
 	private toastCtrl: ToastController,
 	private loadingCtrl: LoadingController,
 	) { 

		const user_data: string | null = localStorage.getItem('user');
			if (user_data !== null) {
			  this.userlogin_data = JSON.parse(user_data);
			}
		this.leaveList();
 }

 ngOnInit() {
    this.startTimer();
  }

   startTimer() {
    setTimeout(() => {
      this.showProgressBar = false;
    }, 5000); // 5 seconds
  }

  navigate(){
    this.router.navigate(['/tabs/leave'])
  }
  

  	leaveList(){
	    const data = [{
	        'emp_id_no' : this.userlogin_data.emp_id_no,
	        'id' : this.userlogin_data.id,
	      }];
  			this.userService.getHeadLeaveList(data).subscribe((res:any) => {
  				this.loadBalance();
		  		this.pendingLeaveList = res;
			}, err => {
		            if (err) {
		             console.log('no data found');
		            }
		        });
	}




	 approvalRequest(data: any) {

        const formData = [{
        'id' : data.id,
        'emp_id_no' : data.emp_id_no,
        'head_approved_status' : 'Approved',
        'head_approved_by' : this.userlogin_data.id,
        'leave_date' : data.dates,
        'emp_name' : data.emp_name,
        'leave_message' : data.leave_message,
        'leave_type' : data.leave_type_name,
      }];

      this.userService.headApproveLeave(formData).subscribe((result: any) => {
       	if ('status' in result) {
			        const status = result['status'] as string; 
			        if (status === "success") {
						  this.leaveList();
			        	this.toast('Leave Application Approved', 5000);
			        }else{
			        	this.toast('Sorry !!! something went worng', 5000);
			        	
			        }
			    } else {
			        this.toast('Please enter valid data!', 5000);
			    }
			    // console.log(result);
      });
    }   

    rejectRequest(data: any) {


      const formData = [{
        'id' : data.id,
        'head_approved_status' : 'Rejected',
        'head_approved_by' : this.userlogin_data.id,
      }];

      this.userService.headRejectLeave(formData).subscribe((result: any) => {
         if ('status' in result) {
              const status = result['status'] as string; 
              if (status === "success") {
            this.leaveList();
                this.toast('Leave Application Rejected', 5000);
              }else{
                this.toast('Sorry !!! something went worng', 5000);
                
              }
          } else {
              this.toast('Please enter valid data!', 5000);
          }
          // console.log(result);
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
