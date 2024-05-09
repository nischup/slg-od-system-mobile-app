import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { config } from '../config';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LeaveService {

  public API = config.API_URL;
  user:any;
  data:any;

   constructor(private http: HttpClient) {
        
    }


    findAllLeaveType(data: Boolean) {
        return this.http.get(config.API_URL + 'hrm-leave-type-list.php' + data);
    }


}
