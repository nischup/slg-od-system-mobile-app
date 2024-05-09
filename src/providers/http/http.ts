/**
===============================
  Author Alimul Razi & Sabbir Ahmed
  BPG- SoftwareTeam
  Copyright @2020
==============================
*/

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { config } from '../../config';
import { Observable } from 'rxjs/Rx';


/*
  Generated class for the HttpProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class HttpProvider {

  public API = config.API;
  public API2 = config.API2;
  user:any;

  constructor(public httpClient: HttpClient) {
    // console.log('Hello HttpProvider Provider');
    this.user = JSON.parse(localStorage.getItem('user'));
  }

  public login(data) {
    return this.httpClient.post(this.API + 'login.php', data);
  }  

  public getRequestCount() {
    return this.httpClient.get(this.API + 'new_request_count');
  }      

  // public getRequestList() {
  //   return this.httpClient.get(this.API + 'new_request');
  // }    

  // public getBudgetApprovalList(user_id) {
  //   return this.httpClient.get(this.API + 'budget_approval_list/' + user_id);
  // }  

  // public budgetApprovalCount(user_id) {
  //   return this.httpClient.get(this.API + 'budget_approval_count/' + user_id);
  // }  

  // public getSupplierPriceQtionNo(supplier_id) {
  //   return this.httpClient.get(this.API + 'supplier_price_qtion_no/' + supplier_id);
  // }  

  // public getSupplierProductCount(supplier_id) {
  //   return this.httpClient.get(this.API + 'supplier_product_count/' + supplier_id);
  // }   
  


  // public getSupplierPriceQtionList(supplier_id) {
  //   return this.httpClient.get(this.API + 'supplier_price_quotation_list/' + supplier_id);
  // }  

  

  public getCheckInCheckOutList(data) {
    return this.httpClient.post(this.API + 'check-in-list.php', data);
  } 

  public getCheckLunchList() {
    return this.httpClient.get(this.API + 'check-in-lunch-list.php?user_id='+this.user.id+'&project_id='+this.user.project_id);
  }   

  public getallRequisitionLis(data) {
    return this.httpClient.post(this.API + 'all-requisition-list.php', data);
  }    

  public getCountList() {
    return this.httpClient.get(this.API + 'count-all-req.php?user_id='+this.user.id+'&project_id='+this.user.project_id);
  }   

   public getMyList() {
    return this.httpClient.get(this.API + 'count-my-req.php?user_id='+this.user.id+'&project_id='+this.user.project_id);
  }     


   public getTodaysList() {
    return this.httpClient.get(this.API + 'todays-approve-visitor-list.php?user_id='+this.user.id+'&project_id='+this.user.project_id);
  }    

  public getMyRequisitionList(data) {
    return this.httpClient.post(this.API + 'my-requisition-list.php', data);
  }     

  public leaveApploication(data) {
    return this.httpClient.post(this.API + 'leave-appliation.php', data);
  }    


  public attendanceApploication(data) {
    return this.httpClient.post(this.API + 'attendance-appliation.php', data);
  }     

  public searchEmpAttn(data) {
    return this.httpClient.post(this.API + 'search-employee-attendance.php', data);
  }     

  public hrmLeaveType(data) {
    return this.httpClient.get(this.API + 'hrm-leave-type-list.php', data);
  }   

  public sendMsgdata(data) {
    return this.httpClient.post(this.API + 'send-confirm-message.php', data);
  }   

  public checkInMsgSent(data) {
    return this.httpClient.post(this.API + 'send-confirm-checkin-message.php', data);
  }   

  public newRequisition(data) {
    return this.httpClient.post(this.API + 'create-requisition.php', data);
  }  

  public approvalRequisition(data) {
    return this.httpClient.post(this.API + 'approve_requisition.php', data);
  }
  

  public checkIn(data) {
    return this.httpClient.post(this.API + 'check-in.php', data);
  }  
  public checkOut(data) {
    return this.httpClient.post(this.API + 'check-out.php', data);
  }

  public getHeadAttApprList(data) {
    return this.httpClient.post(this.API + 'head_attendance_approval_list.php', data);
  }     

  public getHrAttApprList(data) {
    return this.httpClient.post(this.API + 'hr_attendance_approval_list.php', data);
  }    

  public getMyLeaveList(data) {
    return this.httpClient.post(this.API + 'my_leaves.php', data);
  }    

  public getMyAttAdjSummary(data) {
    return this.httpClient.post(this.API + 'my_attendance_adj_list.php', data);
  }  

  public getHeadLeaveList(data) {
    return this.httpClient.post(this.API + 'head_leaves_approval_list.php', data);
  }    

  public headApproveLeave(data) {
    return this.httpClient.post(this.API + 'head_leaves_approval.php', data);
  }  

  public hrApproveLeave(data) {
    return this.httpClient.post(this.API + 'hr_leaves_approval.php', data);
  }   

  public hrRejectLeave(data) {
    return this.httpClient.post(this.API + 'hr_leaves_reject.php', data);
  }   

  public headRejectLeave(data) {
    return this.httpClient.post(this.API + 'head_leaves_reject.php', data);
  }  

  public headApproveAttn(data) {
    return this.httpClient.post(this.API + 'head_attn_approval.php', data);
  }   
  
  public hrHeadApproveAttnErp(data) {
    return this.httpClient.post(this.API2 + 'api_attendance_entry.php', data);
  }    

  public hrApproveLeaveERP(data) {
    return this.httpClient.post(this.API2 + 'api_leave_entry.php', data);
  } 

  public hrApproveLeaveStatusLogistics(data) {
    return this.httpClient.post(this.API + 'api_change_leave_status.php', data);
  }  

  public hrApproveAttn(data) {
    return this.httpClient.post(this.API + 'hr_attn_approval.php', data);
  }
  
  public hrrejectAttn(data) {
    return this.httpClient.post(this.API + 'hr_attn_reject.php', data);
  }
  
  public headRejectAttn(data) {
    return this.httpClient.post(this.API + 'head_attn_reject.php', data);
  }

  public getHRLeaveList(data) {
    return this.httpClient.post(this.API + 'hr_leaves_approval_list.php', data);
  }    

  public hrLeaveTypeList() {
    return this.httpClient.get(this.API + 'hrm-leave-type-list.php');
  }   

  public getAllProjectList() {
    return this.httpClient.get(this.API + 'project-list.php');
  }   

  public getLunchItemList() {
    return this.httpClient.get(this.API + 'lunch-item-list.php');
  }   

  public getTodayLunchList(data) {
    return this.httpClient.post(this.API + 'todays-lunch-list.php', data);
  } 

}
