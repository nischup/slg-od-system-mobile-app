import { Component } from '@angular/core';
import {AuthenticationService} from '../services/authentication.service';
import {Router} from '@angular/router';
import { config } from '../config';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  userlogin_data: any;
  profile_image: any;

  constructor(
    private router: Router, 
    public auth: AuthenticationService
    ) {
      const user_data: string | null = localStorage.getItem('user');
        if (user_data !== null) {
          this.userlogin_data = JSON.parse(user_data);
        this.profile_image = this.userlogin_data.profile_image;
        this.router.navigateByUrl('/tabs/tab3');
      }else{
        this.router.navigateByUrl('/login');
      }
  }

    ngOnInit() {
  	 this.getUserInfo()
     // console.log(config.API_URL);
  }

  	public getUserInfo(): string | null {
		const user = localStorage.getItem('user');
		return user ? JSON.parse(user) : null;
		console.log(user);
	}

   logout() {
    localStorage.removeItem('user');
    this.auth.setLoginStatus(false);
    this.router.navigate(["/login"]);
  }

}
