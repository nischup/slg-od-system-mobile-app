import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

	isLoggedIn = new Subject<boolean>();

  constructor() { }

	public getUserInfo(): string | null {
		const user = localStorage.getItem('user');
		return user ? JSON.parse(user) : null;
	}

	setLoginStatus(status: boolean) {

    this.isLoggedIn.subscribe((value: boolean) => {
		  // Handle the updated value
		  console.log('isLoggedIn value:', value);
		});
  }


}
