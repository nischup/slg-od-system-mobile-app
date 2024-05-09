import { HttpClient } from '@angular/common/http';
import { Injectable, EventEmitter } from '@angular/core';
import {Observable} from 'rxjs/Rx';
import 'rxjs/add/operator/map';

/*
  Generated class for the AuthServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class AuthServiceProvider {

	isLoggedIn = new EventEmitter<boolean>();

  constructor(public http: HttpClient) {
    console.log('Hello AuthServiceProvider');
  }

  public getUserInfo() {
    const user = JSON.parse(localStorage.getItem('user'));
    return user;
  }

  setLoginStatus(status) {
    this.isLoggedIn.emit(status);
  }

}
