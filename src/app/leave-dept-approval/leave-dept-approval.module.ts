import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LeaveDeptApprovalPageRoutingModule } from './leave-dept-approval-routing.module';

import { LeaveDeptApprovalPage } from './leave-dept-approval.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LeaveDeptApprovalPageRoutingModule
  ],
  declarations: [LeaveDeptApprovalPage]
})
export class LeaveDeptApprovalPageModule {}
