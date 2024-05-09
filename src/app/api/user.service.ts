import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {config} from '../config';
import {Router} from '@angular/router';


@Injectable({
    providedIn: 'root'
})
export class UserService {
    private token: any;
    private data: any;

    constructor(public http: HttpClient,
                private router: Router) {
            if (localStorage.getItem('user')) {
              
            } else {
                this.router.navigateByUrl('/login');
            }
        }

  
	 login(data: any) {
	    return this.http.post(config.API_URL + 'login.php', data);
	 } 



      public leaveApplication(data: any) {
        return this.http.post(config.API_URL + 'leave-application.php', data);
      }        

      public odApplication(data: any) {
        return this.http.post(config.API_URL + 'od-application.php', data);
      }   

	  public hrmLeaveType() {
	    return this.http.get(config.API_URL + 'hrm-leave-type-list.php');
	  }       

      public hrmcompanyList() {
        return this.http.get(config.API_URL + 'hrm-company-list.php');
      }      

      public employeeList() {
        return this.http.get(config.API_URL + 'employee-list.php');
      } 

      public getHeadLeaveList(data: any) {
        return this.http.post(config.API_URL + 'head_leaves_approval_list.php', data);
      }    
      
      public headApproveLeave(data: any) {
        return this.http.post(config.API_URL + 'head_leaves_approval.php', data);
      }

      public headRejectLeave(data: any) {
        return this.http.post(config.API_URL + 'head_leaves_reject.php', data);
      } 

     public getMyLeaveList(data: any) {
        return this.http.post(config.API_URL + 'my_leaves.php', data);
     }  

  public getMyODRequest(data: any) {
    return this.http.post(config.API_URL + 'my_od_request_list.php', data);
  }  

   public getHeadODApprList(data: any) {
    return this.http.post(config.API_URL + 'head_od_approval_list.php', data);
  } 

  public headRejectOD(data: any) {
    return this.http.post(config.API_URL + 'head_od_reject.php', data);
  }


  public headApproveOD(data: any) {
    return this.http.post(config.API_URL + 'head_od_approval.php', data);
  } 

    logoutAuth() {
        let headers = new HttpHeaders().set('Accept', 'application/json');
        headers = headers.set('Authorization', 'Bearer ' + this.token);

        const url = config.API_URL + 'v1/logout';
        return this.http.post<any>(url, {headers});
    }
          

  

}

